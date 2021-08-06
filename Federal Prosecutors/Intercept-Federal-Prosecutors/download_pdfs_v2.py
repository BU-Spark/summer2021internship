import requests
import re
import os
import dotenv
import google.cloud.storage as storage
import pandas as pd
import numpy as np
import threading


"""
Input: None
Output: GCS Client Object
"""
def connect_to_gcs():
    client = storage.Client.from_service_account_json(os.getenv('credentials'))
    print('successful client connection')
    return client


"""
Input: PDF Link
Output: Filepath for downloaded pdf
"""
def download_pdf(link):
    # format filename
    filename = link[-19:-6] + link[-4:]
    match = re.search("ca", filename)
    filename = filename[match.start():]

    # download pdf to local storage
    with open(filename, "wb") as file:
        file.write(requests.get(link).content)
    print(f"Filename: {filename}")
    return filename


"""
Input: GCS Client Object, File path
Output: None
Uploads local pdf file to GCS, then deletes local file
"""
def send_to_gcs(client, filename):
    # get folder and case number for organizing GCS
    dash = re.search("-", filename)
    folder = filename[0:dash.start()]
    print(f"folder: {folder}")
    
    case_num = filename[dash.end():-4]
    print(f"case number: {case_num}")

    # navigate to bucket
    bucket = client.get_bucket("intercept")

    # create new blob and upload file
    blob = bucket.blob(f"pdfs/{folder}/{case_num}.pdf")
    blob.upload_from_filename(filename)
    print('successful pdf upload')

    # delete file if still in local storage
    if os.path.exists(filename):
        os.remove(filename)
    else:
        raise FileNotFoundError


"""
Input: PDF Link, Client Object
Output: None
Wrapper to download PDF and send to GCS for use with Pandas DataFrame
"""
def upload_pdf_from_csv(link, client):
    filename = download_pdf(link)
    send_to_gcs(client, filename)
    print()


# calls function to carry out download and upload for this thread
def thread_function(data_split, client):
    data_split['PDF_Link'].apply(lambda link: upload_pdf_from_csv(link, client))

def main():
    dotenv.load_dotenv()
    client = connect_to_gcs()
    new_data = pd.read_csv("newCases.csv")
   
    data_split = np.array_split(new_data, 4)

    t1 = threading.Thread(target=thread_function, args=(data_split[0], client,))
    t2 = threading.Thread(target=thread_function, args=(data_split[1], client,))
    t3 = threading.Thread(target=thread_function, args=(data_split[2], client,))
    t4 = threading.Thread(target=thread_function, args=(data_split[3], client,))

    t1.start()
    t2.start()
    t3.start()
    t4.start()
    
    t1.join()
    t2.join()
    t3.join()
    t4.join()

if __name__ == '__main__':
    main()