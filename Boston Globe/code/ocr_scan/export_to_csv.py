import json
import re
import os
import pandas as pd
import dotenv
from google.cloud import storage

"""
Gets JSON of parsed data from cloud and returns a list of the dictionary form of each grievance data
"""
def get_json():

    # get credentials for storage API
    credentials = os.getenv("credentials")
    storage_client = storage.Client.from_service_account_json(credentials)
    folder = storage_client.list_blobs("boston-globe", prefix="parsed_data/")
    files = [i.download_as_string() for i in folder][1:]
    extracted_files = [json.loads(x) for i, x in enumerate(files)]
    return extracted_files

# INPUT: JSON files from get_json()
# OUTPUT: CSV file containing all grievance data
def convert_to_csv(extracted_files):
    dataframes = []
    for i, file in enumerate(extracted_files):
        # convert to list
        list_data = []
        for key, value in file.items():
            temp = value
            temp.insert(0, key)
            list_data.append(temp)
        df = pd.DataFrame(list_data, columns=['grievance_num', 'institution', 'housing', 'date_of_incident', 'complaint', 'staff_involved', 'staff_recipient', 'date_of_receipt', 'decision_date', 'signature', 'final_decision', 'decision'])
        dataframes.append(df)
    full_df = pd.concat(dataframes)
    print(full_df.iloc[236])
    full_df.to_csv("/Users/jaydenfont/Desktop/Code/Spark/BostonGlobe/BUXC433-BostonGlobe/data.csv", index=False)

def main():
    dotenv.load_dotenv()
    extracted_files = get_json()
    convert_to_csv(extracted_files)

if __name__ == "__main__":
    main()