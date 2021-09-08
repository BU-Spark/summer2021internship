import re
from google.cloud import vision
import io
import os
from dotenv import load_dotenv
import csv
import mysql.connector
from mysql.connector import Error
import json
from google.cloud import storage


# for JPEG
# Depreciated
def getText(uri):
    """
    Function that takes as input an address to an image and returns all the text that was detected in that image
    """
    print('here')
    image_uri = uri
    client = vision.ImageAnnotatorClient()
    with io.open(image_uri, 'rb') as image_file:
        content = image_file.read()
    image = vision.Image(content=content)
    response = client.text_detection(image=image)
    print(response.text_annotations[0].description)
    return response.text_annotations[0].description


# Finds pdf on GCS, extracts text and uploads into JSON files in batches of 100 pages
def get_pdf_text():
    client = vision.ImageAnnotatorClient.from_service_account_json(os.getenv("credentials"))
    batch_size=100
    mime_type = 'application/pdf'
    feature = vision.Feature(
        type_=vision.Feature.Type.DOCUMENT_TEXT_DETECTION
    )

    # GCS source (where pdf is stored on cloud), change pdf name based on file
    gcs_source_uri = "gs://boston-globe/Norfolk_Grievances.pdf"
    gcs_source = vision.GcsSource(uri=gcs_source_uri)

    # set configs for input data
    input_config = vision.InputConfig(
        gcs_source=gcs_source, mime_type=mime_type)

    # set destination on google cloud
    gcs_destination_uri = 'gs://boston-globe/norfolk_result/'
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
    storage_client = storage.Client.from_service_account_json(os.getenv("credentials"))

    match = re.match(r'gs://([^/]+)/(.+)', gcs_destination_uri)
    bucket_name = match.group(1)
    prefix = match.group(2)

    bucket = storage_client.get_bucket(bucket_name)
  
    # List objects with the given prefix.
    blob_list = list(bucket.list_blobs(prefix=prefix))
    print('Output files:')
    for blob in blob_list:
        print(blob.name)
    
    all_blobs = [blob for blob in bucket.list_blobs()]
    blob_list = [blob for blob in all_blobs if pattern.search(blob.name) == "output-1-to-22.json"]

    # Process the first output file from GCS.
    # Since we specified batch_size=2, the first response contains
    # the first two pages of the input file.
    output = blob_list[0]

    json_string = output.download_as_string()
    response = json.loads(json_string)

    # The actual response for the first page of the input file.
    first_page_response = response['responses'][0]
    annotation = first_page_response['fullTextAnnotation']

    # Here we print the full text from the first page.
    # The response contains more information:
    # annotation/pages/blocks/paragraphs/words/symbols
    # including confidence scores and bounding boxes
    print('Full text:\n')
    #print(annotation['text'])

# Depreciated
def getData(text):
    """
    Function that takes as input a string and returns dictionary with the fields of the resulting database as keys and the values discovered for those keys in the inputed string.
    """
    # dictionary with keys being the fields of the database and values being an array of strings from which to extract the strings for the database values from.
    field_dict = {'institution': ["Institution", "Date"], 'complaint': ["Informal filed", "Remedy"], 'remedy': ["Requested", "Recipient"], 'finaldecision': ["Final", ""], 'housing': ["Housing", "Informal"], "cosignature": [
        "INMATE RECEIPT", ""], "recieveddate": ["INMATE RECEIPT", ""], "decisiondate": ["RECEIPT", "appealed"], 'grievancedate': ["Housing", "Informal"], 'incidentdate': ["Housing", "Informal"], "corecipient": ["Requested", "Recipient"]}
    return_dict = {}
    for i in field_dict:
        data = ""
        string1 = field_dict[i][0]
        string2 = field_dict[i][1]
        if string1 in text and string2 in text:
            if string2 != "":
                data = text[text.index(string1)+len(string1)                            :text.index(string2)].strip()
            else:
                data = text[text.index(string1)+len(string1):].strip()

            if i == "complaint":
                if "No" in data:
                    data = data[data.index("No")+len("No"):].strip()
                if data == "":
                    data = None
            if i == "remedy":
                if "Staff" in data:
                    data = data[:data.index("Staff")].strip()
                if data == "":
                    data = None
            if i == "finaldecision":
                if "Signature" in data:
                    data = data[:data.index("Signature")].strip()
                if data == "":
                    data = None
            if i == "housing":
                if "Incident" in data:
                    data = data[:data.index("Incident")]
                    data = data[:-18].strip()
                else:
                    data = data[:-18].strip()
                if data == "":
                    data = None
            if i == "cosignature":
                if "Signature" in data:
                    data = data[data.index(
                        "Signature")+len("Signature"):].strip()
                if data == "":
                    data = None
            if i == "recieveddate":
                if "Received" in data and "Signature" in data:
                    data = data[data.index(
                        "Received")+len("Received"):data.index("Signature")].strip()
                if data == "" or len(data) > 8 or not data[0].isnumeric():
                    data = None
            if i == "decisiondate":
                if "Decision Date" in data and "Signature" in data:
                    data = data[data.index(
                        "Decision Date")+len("Decision Date"):data.index("Signature")].strip()
                if data == "" or len(data) > 8 or not data[0].isnumeric():
                    data = None
            if i == "grievancedate":
                if "Incident" in data:
                    data = data[:data.index("Incident")]
                    data = data[-9:].strip()
                else:
                    data = data[-9:].strip()
                if data == "" or len(data) > 8 or not data[0].isnumeric():
                    data = None
            if i == "incidentdate":
                if "Incident" in data:
                    data = data[:data.index("Incident")]
                    data = data[-18:-9].strip()
                else:
                    data = data[-18:-9].strip()
                if data == "" or len(data) > 8 or not data[0].isnumeric():
                    data = None
            if i == "corecipient":
                if "Staff" in data:
                    data = data[data.index("Staff") + len("Staff"):].strip()
            if data == "":
                data = None
        else:
            data = None
        if data != None:
            return_dict[i] = data.strip('\n').replace('\n', '')
        else:
            return_dict[i] = None
    return return_dict


# Depreciated
def clearDB():
    """
    Function that clears the database,
    """
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password=os.getenv("SQLPWD"),
            database="grievancesDB")

        if conn.is_connected():
            print("Connected to db")
            cursor = conn.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            cursor.execute('DROP TABLE IF EXISTS grievances_auto;')
            print('Creating table....')
            cursor.execute("CREATE TABLE grievances_auto (institution CHAR(255), housing CHAR(255), incidentdate CHAR(255), grievancedate CHAR(255), complaint LONGTEXT, remedy LONGTEXT, corecipient LONGTEXT, cosignature CHAR(255), recieveddate CHAR(255), decisiondate CHAR(255), finaldecision LONGTEXT)")
            print("grievances_auto table is created....")
    except Error as e:
        print("Error while connecting to MySQL", e)


# Depreciated
def addGrievance(data):
    """
    Function that takes into input a dictionary of grievance data and puts it into a database.
    """
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password=os.getenv("SQLPWD"),
            database="grievancesDB")
        if conn.is_connected():
            print("Connected to db")
            cursor = conn.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            placeholders = ', '.join(['%s'] * len(data))
            columns = ', '.join(data.keys())
            sql = "INSERT INTO %s ( %s ) VALUES ( %s )" % (
                'grievances_auto', columns, placeholders)
            cursor.execute(sql, list(data.values()))
            conn.commit()
            print("record inserted")
    except Error as e:
        print("Error while connecting to MySQL", e)

# Depreciated
def ocr():
    """
    Funciton to add all greivances into the database.
    """
    directory = os.getenv('GRIEVANCES_DIRECTORY')
    count = 0
    for filename in os.listdir(directory):
        print(filename)
        if filename.endswith(".jpg"):
            print('file found')
            grievancetext = getText(os.path.join(directory, filename))
            grievancedata = getData(grievancetext)
            addGrievance(grievancedata)
            count += 1
            print(count)
            print()


def showDatabase():
    """
    Function to show all entries in the database.
    """
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password=os.getenv("SQLPWD"),
            database="grievancesDB")
        if conn.is_connected():
            print("Connected to db")
            cursor = conn.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            sql = "SELECT * FROM grievances_auto"
            cursor.execute(sql)
            result = cursor.fetchall()
            column_names = [i[0] for i in cursor.description]
            fp = open('test.csv', 'w')
            myFile = csv.writer(fp)
            myFile.writerow(column_names)
            myFile.writerows(result)
            fp.close()
    except Error as e:
        print("Error while connecting to MySQL", e)


if __name__ == "__main__":
    load_dotenv(override=True)
    #clearDB()
    #ocr()
    #showDatabase()
    get_pdf_text()
