import json
import os
import re
from dotenv import load_dotenv
from google.cloud import storage
from google.oauth2.service_account import Credentials


# INPUT: a result folder from Google Cloud (ex: occc_result)
# RETURN: blob_list, a list of json files each containing grievances split per 100 pages
def getIterables(folder):

    # get credentials for storage API
    credentials = os.getenv("credentials")
    storage_client = storage.Client.from_service_account_json(credentials)

    # Find all blobs with the information we want
    bucket = storage_client.get_bucket("boston-globe")
    all_blobs = [blob for blob in bucket.list_blobs()]
    pattern = re.compile(folder)
    json_list = [blob for blob in all_blobs if pattern.search(blob.name) is not None]

    # print out json file names
    print('Output files:')
    for blob in json_list:
        print(blob.name)

    print()
    print()

    return json_list



# INPUT: a json file containing 100 pages of grievances data (ex: ncci_result/output-1-to-100.json)
# RETURN: a string of 100 pages of grievances data
def joinPages(file):

    # unload json data
    json_string = file.download_as_string()
    response = json.loads(json_string)

    # concatenate data to string
    all_pages = ''
    for i in range(len(response['responses'])):
        all_pages += response['responses'][i]['fullTextAnnotation']['text']

    return all_pages



# INPUT: a list of json files each containing grievances split per 100 pages (i.e. output of getIterables())
# OUTPUT: a string of all of the grievances data
def joinJSONs(json_list):

    # iterate over the json list, combine all the pages in each json, then combine all the json strings
    all_data = ''
    for blob in json_list:
        all_data += joinPages(blob)

    return all_data



# INPUT: a string of all of the grievances data
# OUTPUT: a list of grievances where each grievance includes data from: 
#         - inmate grievance form
#         - receipt(s) by institutional grievance coordinator
#         - receipt by inmate
def getGrievList(string):
    
    # get indices of all occurences of 'inmate grievance form'
    grievs = string.split('\n')
    indices = [i for i, x in enumerate(grievs) if x == 'INMATE GRIEVANCE FORM']

    # add each grievance to a list by getting data between consecutive occurrences of 'inmate grievance form'
    grievances_list = []
    for i in range(len(indices)-1):
        grievances_list.append(grievs[indices[i]:indices[i+1]])
    
    # add last grievance because it's the last occurrence of 'inmate grievance form'
    grievances_list.append(grievs[indices[len(indices)-1]:])

    print('Number of grievances:')
    print(len(grievances_list))

    print()
    print()

    return grievances_list


# INPUT: a list of grievances
# OUTPUT: a dictionary where the key is the grievance # and the value is a list containing
#        [institution, housing, date of incident, complaint, staff involved, staff recipient, date of receipt, decision date, signature, final decision, decision]
# General Strategy: find the indices of the words in the list before and after the information you want, then slice the grievances list and join the information
#   Straightforward for Grievance info, takes more effort for receipt information since it can span multiple pages
def get_fields(grievances_list):

    # test for griveance #
    #grievances_list = [grievances_list[6]]
        
    data = {}
    count = 0

    for grievance in grievances_list:

        print(count)
        count+=1
        print(grievance)

        fields = []

        # grievance number
        grievance_num = [i for i in grievance if 'Grievance#' in i]
        grievance_num = int(grievance_num[0].split()[1])
        
        
        # Institution
        institution = [i for i in grievance if "Institution " in i]
        match = re.search("Institution ", institution[0])
        lastindex = match.span()[1]
        fields.append(institution[0][lastindex:])  # remove everything except the text after the word "Institution"
        
        # Housing
        housing_index = [i for i, x in enumerate(grievance) if 'Housing' in x or x == "Housing"][0]
        """
        if len(housing) is not 0:
            fields.append(housing[0][8:])
        else:
            fields.append("")
            """
        if "Housing " in grievance[housing_index]:
            fields.append(grievance[housing_index][8:])
        else:
            fields.append(grievance[housing_index+1])

        # Date of incident
        date_of_incident = [grievance[i+1] for i, x in enumerate(grievance) if "Incident" in x]
        fields.append(date_of_incident[0][:4] + "/" + date_of_incident[0][4:6] + "/" + date_of_incident[0][6:])

        # Complaint
        complaint_index = [i for i, x in enumerate(grievance) if x == "Complaint"][0]
        remedy_index = [i for i, x in enumerate(grievance) if x == "Remedy"][0]
        complaint = " ".join(grievance[complaint_index+1:remedy_index])
        fields.append(complaint)

        # Staff Involved
        involved_index = [i for i, x in enumerate(grievance) if x == "Involved"][0]
        signature_index = [i for i, x in enumerate(grievance) if x == "Signature"][0]
        staff_involved = ", ".join(grievance[involved_index+1:signature_index])
        fields.append(staff_involved)

        # Staff Recepient
        recipient_index = [i for i, x in enumerate(grievance) if x == "Recipient"][0]
        staff_index = [i for i, x in enumerate(grievance) if x == "Staff"][1]
        staff_recipient = ", ".join(grievance[recipient_index+1:staff_index])
        fields.append(staff_recipient)

        

        # Find where the receipt starts in the grievance
        try:
            receipt_index = [i for i, x in enumerate(grievance) if x == "RECEIPT BY INSTITUTIONAL GRIEVANCE COORDINATOR" and "Date Received" in grievance[i+1]][0] # we want "date received" to be next to it so we know this is the start

        except IndexError:  # leave these in except block since checking every time is slower
            receipt_index = [i for i, x in enumerate(grievance) if (x == "RECEIPT BY INSTITUTIONAL GRIEVANCE COORDINATOR" or x == "ANCE COORDINATOR" or x == 'VANCE COORDINATOR' or x == "ONAL GRIEVANCE COORDINATOR"
            or x == "BY INSTITUTIO NAL GRIEVANCE COORDINATOR" or x == "BY INSTITUTIONAL GRIEVANCE COORDINATOR" or x == "NCE COORDINATOR"
            or x == "BY INSTITUTIONAL GRIE ANCE COORDINATOR") and "Date Received" in grievance[i+1]][0]

        receipt = grievance[receipt_index:]
        print()
        print(receipt)


        # Remove footer text
        try:
            bu_request_index = [i for i, x in enumerate(receipt) if x == "BU Grievances Request"][0]
            end_of_footer_index = [i for i, x in enumerate(receipt) if x == "RECEIPT BY INSTITUTIONAL GRIEVANCE COORDINATOR" and i > bu_request_index][0] # or (x == "20181023" and grievance[i+1] == "Staff"))
            receipt = receipt[:bu_request_index] + receipt[end_of_footer_index+1:]

        except IndexError:  # single page grievances don't need to do this, will throw index error
            pass


        # Date of Receipt
        date_of_receipt = [receipt[i+1] for i, x in enumerate(receipt) if x == "Date Received"]
        fields.append(date_of_receipt[0][:4] + "/" + date_of_receipt[0][4:6] + "/" + date_of_receipt[0][6:])

        # Decision Date
        date_of_decision = [receipt[i+1] for i, x in enumerate(receipt) if x == "Decision Date"]
        fields.append(date_of_decision[0][:4] + "/" + date_of_decision[0][4:6] + "/" + date_of_decision[0][6:])
        
        # Signature
        try:
            signature_index = [i for i, x in enumerate(receipt) if x == "Signature"][0]
        except IndexError:
            signature_index = [i for i, x in enumerate(receipt) if x == "Signature."][0]

        final_decision_joined = False  # sometimes will be "Final Decision DENIED" in one entry
        try:
            final_decision_index = [i for i, x in enumerate(receipt) if x == "Final Decision"][0]
        except IndexError:
            final_decision_index = [i for i, x in enumerate(receipt) if "Final Decision" in x][0]
            final_decision_joined = True 

        signature = ", ".join(receipt[signature_index+1:final_decision_index])
        fields.append(signature)

        # Final Decision
        try:
            decision_index = [i for i, x in enumerate(receipt) if x == "Decision"][0]
            if final_decision_joined == False:
                final_decision = ", ".join(receipt[final_decision_index+1:decision_index]) 
            else:
                final_decision = ", ".join(receipt[final_decision_index:decision_index])[15:]  # remove "Final Decision" from string result
        except IndexError:
            final_decision = receipt[final_decision_index+1]  # for specific case on pg 58 of OCCC
        fields.append(final_decision)

        # Decision 
        try:
            signature_index = [i for i, x in enumerate(receipt) if x == "Signature"][1]
            decision = ", ".join(receipt[decision_index+1:signature_index])
        except IndexError:
            try:
                signature_index = [i for i, x in enumerate(receipt) if x == "Signature."][1]
            except IndexError:
                decision = ", ".join(receipt[20:22]) # for specific case on pg 58 of OCCC
        fields.append(decision)


        print()
        print(fields)
        print()
        print()

        if len(fields) != 11:
            print('WRONG LENGTH !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        data[grievance_num] = fields

    return data

# INPUT: dictionary of grievance data, folder name
# OUTPUT: Uploads dictionary to GCS as JSON, does not return value in execution
def send_to_gsc(data, folder):

    # get name of file to use
    match = re.search("_result", folder)
    folder_name = folder[0:match.span()[0]]
    print(folder_name)

    # convert to JSON and store as placeholder file
    with open("placeholder.json", 'w') as placeholder:
        json.dump(data, placeholder)

    # upload to storage 
    filepath = os.getenv("PLACEHOLDER_PATH")
    credentials = os.getenv("credentials")
    storage_client = storage.Client.from_service_account_json(credentials)
    bucket = storage_client.get_bucket("boston-globe")
    blob = bucket.blob(f"parsed_data/{folder_name}.json")
    blob.upload_from_filename(filepath)
    print("successful upload")

    # delete placeholder file
    if os.path.exists(filepath):
        os.remove(filepath)
        print("placeholder removed")
    else:
        print("file does not exist")


if __name__ == "__main__":
    institutions = ['concord', 'ncci', 'norfolk', 'occc', 'shirley', 'sbcc']
    for institution in institutions:
        folder = institution + '_result'
        print(folder)
        load_dotenv(override=True)
        json_list = getIterables(folder)
        all_data = joinJSONs(json_list)
        grievances_list = getGrievList(all_data)
        data = get_fields(grievances_list)
        print(data)
        send_to_gsc(data, folder)


