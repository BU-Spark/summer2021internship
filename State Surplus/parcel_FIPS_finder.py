import pandas
import requests
import json
import csv

def validate(parcel):
    if parcel["latitude"] and parcel["longitude"]:
        return True
    return False

parcels = pandas.read_csv("final_data.csv")
parcel_dict = {}

geo_url = "https://geo.fcc.gov/api/census/area?lat={}&lon={}&format=json"

count = 0

for parcel in parcels.iterrows():
    count += 1
    if count % 100 == 0:
        print(count)
    parcel_data = parcel[1]
    parcel_id = parcel_data["parloc_id"]
    geo_data = json.loads(requests.get(geo_url.format(parcel_data["latitude"], parcel_data["longitude"])).content)
    try:
        parcel_dict[parcel_id] = {"addr_str": parcel_data["addr_str"], "addr_num": parcel_data["addr_num"],
                              "addr_zip": parcel_data["addr_zip"], "site_addr": parcel_data["site_addr"],
                              "latitude": parcel_data["latitude"], "longitude": parcel_data["longitude"],
                              "fips": geo_data["results"][0]["block_fips"]}
    except:
        print(parcel_data["parloc_id"])

with open("parcel-geoInfo.csv", "w", newline="") as csv_file:
    output = csv.writer(csv_file)
    output.writerow(["id", "site_addr", "addr_str", "addr_num", "addr_zip", "latitude", "longitude", "fips"])
    for parcel in parcel_dict:
        parcel_data = parcel_dict[parcel]
        output.writerow([parcel, parcel_data["site_addr"], parcel_data["addr_str"], parcel_data["addr_num"],
                         parcel_data["addr_zip"], parcel_data["latitude"], parcel_data["longitude"],
                         parcel_data["fips"]])
