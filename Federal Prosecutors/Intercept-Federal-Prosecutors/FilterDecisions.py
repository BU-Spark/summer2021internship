import re
from google.cloud import vision
import os
from dotenv import load_dotenv
import json
from google.cloud import storage
from google.oauth2.service_account import Credentials
import pandas as pd
import numpy as np
import threading
import time


'''
Function needs refining, may not capture all cases
'''
def check_for_prosecutor_misconduct_found(decision):
    if 'prosecutorial misconduct' in decision or 'prosecutorial\nmisconduct' in decision:
        return True
    
    # checks if the words "prosecutor" and "misconduct" appear within 6 words of each other, front or back
    pattern = re.compile(r"\b(?:prosecutor\W+(?:\w+\W+){0,6}?misconduct|misconduct\W+(?:\w+\W+){0,6}?prosecutor)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]

    if len(matches) > 0:
        return True

    # checks if "prosecutor's ... conduct" or "conduct ... prosecutor" appears, within 6 words
    pattern = re.compile(r"\b(?:prosecutor's\W+(?:\w+\W+){0,6}?conduct|conduct\W+(?:\w+\W+){0,6}?prosecutor)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]

    if len(matches) > 0:
        return True

    # checks if the words "government" and "misconduct" appear within 6 words of each other, front or back
    pattern = re.compile(r"\b(?:government\W+(?:\w+\W+){0,6}?misconduct|misconduct\W+(?:\w+\W+){0,6}?government)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]

    if len(matches) > 0:
        return True
    else:
        return False
    

# helper, not used in this script
def pull_text_from_gcs():
    credentials = os.getenv("credentials")
    storage_client = storage.Client.from_service_account_json(credentials)
    blobs = storage_client.list_blobs("intercept", prefix="texts/ca6/09-06234/09-06234.txt")
    blob_list = [i for i in blobs]
    text = blob_list[0].download_as_string().decode("utf-8") 
    return text


def join_pages(json_file):

    # unload json data
    json_string = json_file.download_as_string()
    response = json.loads(json_string)

    # concatenate data to string
    all_pages = ''
    for i in range(len(response['responses'])):
        all_pages += response['responses'][i]['fullTextAnnotation']['text']

    return all_pages


def join_JSON(json_list):

    all_data = ''
    for blob in json_list:
        all_data += join_pages(blob)

    return all_data


def extract_pdf_text(court, pdf_name):  # takes pandas input of two columns

    # get credentials for API
    
    credentials = os.getenv("credentials")
    client = vision.ImageAnnotatorClient.from_service_account_json(credentials)
    
    batch_size=100
    mime_type = 'application/pdf'
    feature = vision.Feature(
        type_=vision.Feature.Type.DOCUMENT_TEXT_DETECTION
    )

    # GCS source (where pdf is stored on cloud)
    gcs_source_uri = f'gs://intercept/pdfs/{court}/{pdf_name}.pdf'
    gcs_source = vision.GcsSource(uri=gcs_source_uri)

    # set configs for input data
    input_config = vision.InputConfig(
        gcs_source=gcs_source, mime_type=mime_type)

    # set destination on google cloud
    gcs_destination_uri = f'gs://intercept/texts/{court}/{pdf_name}/'
    gcs_destination = vision.GcsDestination(uri=gcs_destination_uri)

    # set configs for output
    output_config = vision.OutputConfig(
        gcs_destination=gcs_destination, batch_size=batch_size)

    async_request = vision.AsyncAnnotateFileRequest(
        features=[feature], input_config=input_config,
        output_config=output_config)

    operation = client.async_batch_annotate_files(
        requests=[async_request])

    print('Waiting for the operation to finish.')
    operation.result(timeout=420)

    # Once the request has completed and the output has been
    # written to GCS, we can list all the output files.
    storage_client = storage.Client.from_service_account_json(credentials)

    match = re.match(r'gs://([^/]+)/(.+)', gcs_destination_uri)
    bucket_name = match.group(1)
    prefix = match.group(2)

    bucket = storage_client.get_bucket(bucket_name)

    # List objects with the given prefix.
    blob_list = list(bucket.list_blobs(prefix=prefix))
    print('Output files:')
    for blob in blob_list:
        print(blob.name)

    # Process the first output file from GCS.
    blob_list = [i for i in blob_list if i.name[-5:] == ".json"]
    
    decision = join_JSON(blob_list)
    
    '''
    turn decision json to text and upload text back to cloud if text contains mentions of "prosecutorial misconduct" or other terms
    '''

    #print('\nFull Decision:\n')
    #print(decision)

    # upload to google cloud if case contains mentions of misconduct
    if check_for_prosecutor_misconduct_found(decision.lower()) == True:
        output_destination = f'texts/{court}/{pdf_name}/'
        decision_blob = bucket.blob(output_destination + f'{pdf_name}.txt')
        decision_blob.upload_from_string(decision)
        print('\nSuccessfully uploaded to cloud!')
        print("-----------------------------------")
        return True
    else:
        print('\nNo mentions of misconduct!')
        print("-----------------------------------")
        return False

    
# check if a pdf file has already been scraped and if it already has text uploaded
def check_if_scraped(circuit, pdf_name):
    credentials = os.getenv("credentials")
    storage_client = storage.Client.from_service_account_json(credentials)
    blobs = storage_client.list_blobs("intercept", prefix=f"texts/{circuit}/{pdf_name}/")
    blob_list = [blob for blob in blobs]
    blob_name_list = [blob.name for blob in blob_list]
    scraped = False
    has_text = False

    if len(blob_list) > 0:
        print(f"{circuit}/{pdf_name} has been scraped already")
        scraped = True
        if f"texts/{circuit}/{pdf_name}/{pdf_name}.txt" in blob_name_list:
            has_text = True
            
    return scraped, has_text
    

def scrape(circuit, pdf_name):
    # check if file has already been scraped by Google Vision
    scraped, has_text  = check_if_scraped(circuit, pdf_name)
    
    '''
    If it has been scraped, check if a text file exists
        If so, return True so it is counted in the final spreadsheet, if not return false
    If it has not been scraped, scrape it
    '''
    if scraped == True:
        if has_text == True:
            return True
        else:
            return False
    else:
        print("File has not been scraped")
        return extract_pdf_text(circuit, pdf_name)
    

"""
Input: Portion of dataframe, list of data to be joined after executing
Output: None

Helper method that extracts the text from a given dataframe split. It 
sets the dataframe as only the cases which mentioned misconduct, and appends it
to an external list for saving
"""    
def thread_function(data_split, filtered_split):
    data_split = data_split[data_split.apply(lambda x: scrape(x.Court, x.Case_ID), axis=1) == True]  # only add cases if scrape() returns true (i.e, found mentions of misconduct)
    filtered_split.append(data_split)



if __name__ == "__main__":

    start_time = time.time()

    load_dotenv(override=True)

    cases = pd.read_csv("newCases.csv")

    # split dataframe into 4
    data_split = np.array_split(cases, 4)

    # empty list to insert filtered dataframes
    filtered_split = []
    
    print(data_split)

    t1 = threading.Thread(target=thread_function, args=(data_split[0], filtered_split,))
    t2 = threading.Thread(target=thread_function, args=(data_split[1], filtered_split,))
    t3 = threading.Thread(target=thread_function, args=(data_split[2], filtered_split,))
    t4 = threading.Thread(target=thread_function, args=(data_split[3], filtered_split,))

    t1.start()
    t2.start()
    t3.start()
    t4.start()
    
    t1.join()
    t2.join()
    t3.join()
    t4.join()

    cases_with_mentions = pd.concat(filtered_split)
    cases_with_mentions.to_csv("newCasesWithMentions.csv", index=False)
    end_time = time.time()
    print(f"Completed in {end_time-start_time}")
