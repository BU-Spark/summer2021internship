

from collections import deque
import csv
import codecs
import json
import requests

# To run:
# Download the RoughAll sheet from the Mentions of prosecutorial misconduct spreadsheet to mopm.csv.
# Go to the end of the file to where there is an if False statement.
# The code there is untested.
# Change if False to if True.
# Run this python script using python CreateUSInTitle.py.
#
# The csv file will have a USInTitle column which is True or False depending on if any of the keywords are in the title of the case.
# This csv file can be imported into its own sheet in the Mentions of prosecutorial misconduct spreadsheet and inserted into a new column in the RoughAll sheet via the Google Sheets equivalent of a SQL join operation.
# See https://www.ablebits.com/office-addins-blog/2020/02/04/google-sheets-index-match/ on how to use the INDEX spreadsheet function of Google Sheets to achieve this operation.

file = 'mopm.csv'

if __name__ == '__main__':
	identifiers = set()
	with codecs.open(file, encoding='utf-8') as f:
		reader = csv.DictReader(f)
		for row in reader:
			identifier = (row['court'], row['year'], row['case_number_z'])
			identifiers.add(identifier)
	
	out = deque()
	for identifier in identifiers:
		court, year, case_number_z = identifier
		
		keywords = (
			'US',
			'U.S',
			'U. S',
			'United States',
		)
		
		response = requests.get(
			'https://www.govinfo.gov/wssearch/getContentDetail',
			headers = {
				'accept': 'application/json',
				'accept-encoding': 'gzip, deflate, br',
				'accept-language': 'en-US,en;q=0.9',
				'cache-control': 'no-cache',
			},
			params = {
				'packageId': 'USCOURTS-{:s}-{:s}'.format(court, case_number_z),
				'granuleId': 'USCOURTS-{:s}-{:s}-{:d}'.format(court, case_number_z, 0),
			},
		)
		assert response.status_code == 200
		response_object = json.loads(response.text)
		title = response_object['title']
		
		flagged = False
		for keyword in keywords:
			if keyword in title:
				flagged = True
		
		print(identifier, title, flagged)
		out.append((identifier, title, flagged))
	
	out = tuple(out)
	
	with open('m.out.1', 'wb') as f:
		f.write(pickle.dumps(out))

	if False:
		with open('rough_info.1.csv', 'w') as f:
			fieldnames = [
				'court',
				'year',
				'case_number_z',
				'USInTitle',
			]
			writer = csv.DictWriter(f, fieldnames=fieldnames)
			writer.writeheader()

			for x in out:
				court, year, case_number_z, flagged = x
				
				writer.writerow(
					{
						'court': court,
						'year': year,
						'case_number_z': case_number_z,
						'USInTitle': flagged,
					}
				)