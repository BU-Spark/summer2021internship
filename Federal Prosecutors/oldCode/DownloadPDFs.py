

# Downloads pdfs
# At the moment, it downloads the pdf to a location in the data/pdf/ folder.

import requests
import json

import os
import threading

# Given a browsePathAlias for a court and a year, returns the value of the children from the HTTP response.
# Each child has information about a single document.
def by_year(browse_path_alias, year):
	i = 0
	out = []
	while True:
		response = query(browse_path_alias, year, i)
		assert response.status_code == 200, response.status_code
		response = json.loads(response.text)
		children = response['childNodes']
		if len(children) == 0: break
		out += children
		i += 1
	return out

def query_appellate():
	return requests.get(
		'https://www.govinfo.gov/wssearch/rb//uscourts/appellate/',
		headers = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9',
			'cache-control': 'no-cache',
		},
		params = {
			'fetchChildrenOnly': '1',
		},
	)

# Get the browsePathAlias for all the courts
def get_court_aliases():
	r = query_appellate()
	r = json.loads(r.text)
	r = r['childNodes']
	r = [x['nodeValue'] for x in r]
	r = [x['browsePathAlias'] for x in r]
	return r

def query_appellate_court(browse_path_alias):
	return requests.get(
		'https://www.govinfo.gov/wssearch/rb//uscourts/{:s}'.format(
			browse_path_alias,
		),
		headers = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9',
			'cache-control': 'no-cache',
		},
		params = {
			'fetchChildrenOnly': '1',
		},
	)

# Given a browsePathAlias for a court, returns all the years for which that court has cases.
# An example of a browsePathAlias is appellate/ca5
def get_court_years(browse_path_alias):
	r = query_appellate_court(browse_path_alias)
	r = json.loads(r.text)
	r = r['childNodes']
	r = [x['nodeValue'] for x in r]
	r = [x['value'] for x in r]
	r = [int(x) for x in r]
	return r

def query(browse_path_alias, year, page_number):
	return requests.get(
		'https://www.govinfo.gov/wssearch/rb//uscourts/{:s}/{:d}'.format(
			browse_path_alias,
			year,
		),
		headers = {
			'accept': 'application/json',
			'accept-encoding': 'gzip, deflate, br',
			'accept-language': 'en-US,en;q=0.9',
			'cache-control': 'no-cache',
		},
		params = {
			'sortDirection': '1',
			'offset': '{:d}'.format(page_number),
			'pageSize': '100',
			'fetchChildrenOnly': '1',
		},
	)

def main(browse_path_alias, year):	
	response = query(browse_path_alias, year)
	response_object = json.loads(response.text)
	return response_object

def download_pdf(packageid, version):
	response = requests.get(
		'https://www.govinfo.gov/content/pkg/{0:s}/pdf/{0:s}-{1:d}.pdf'.format(packageid, version),
	)
	assert response.status_code == 200, response.status_code
	return response

if __name__ == '__main__':
	cy = [(c, y) for c in get_court_aliases() for y in get_court_years(c)]
	cy = sorted(cy)
	
	threads = dict()
	
	for i, (browse_path_alias, year) in enumerate(cy):
		print(
			'Gathering metadata from {:s} {:d} Progress {:d} / {:d}'.format(
				browse_path_alias,
				year,
				i,
				len(cy),
			),
		)
		children = by_year(browse_path_alias, year)

		for child in children:
			assert isinstance(child, dict)
			
			assert child['books'] == []
			assert child['childNodes'] == []
			
			assert isinstance(child['nodeValue'], dict)
			
			if 'pdf' not in child['nodeValue']:
				print(
					'Missing pdf : {:s}/{:d}/{:s}'.format(
						browse_path_alias,
						year,
						child['nodeValue']['granuleid'],
					),
				)
				continue
				
			assert child['nodeValue']['granuleid'].rfind('-') <= len(child['nodeValue']['granuleid']) - 2, (child['nodeValue']['granuleid'], child['nodeValue']['granuleid'].rfind('-'))
			assert len(child['nodeValue']['granuleid']) - 3 <= child['nodeValue']['granuleid'].rfind('-'), (child['nodeValue']['granuleid'], child['nodeValue']['granuleid'].rfind('-'))
			
			version = int(child['nodeValue']['granuleid'][child['nodeValue']['granuleid'].rfind('-') + 1:])
			
			packageid = child['nodeValue']['packageid']
			
			identifier = (browse_path_alias, year, packageid, version)
			
			if version < 0:
				print(identifier, child['nodeValue'])
				raise RuntimeError
			
			if version >= 6:
				print(
					'high version number: {:s}'.format(
						child['nodeValue']['granuleid'],
					),
				)
			
			if version > 0:
				continue
			
			a = '{:s}/{:s}'.format(child['nodeValue']['packageid'], child['nodeValue']['pdf'])
			b = '{:s}'.format(child['nodeValue']['pdffile'])
			c = '{:s}/pdf/{:s}.pdf'.format(child['nodeValue']['packageid'], child['nodeValue']['granuleid'])
			
			assert a == b
			assert c == b
			
			# This function will be called for each child.
			# Beware that above is a continue statement that makes this only run if the document's version number is 0.
			# At the moment, it downloads the pdf to a location in the data/pdf/ folder.
			def do_something(browse_path_alias, year, packageid, version):
				folder_location = 'data/pdf/{:s}/{:d}'.format(browse_path_alias, year)
				file_name = '{:s}-{:d}.pdf'.format(packageid, version)
				file_location = os.path.join(folder_location, file_name)
				if os.path.exists(file_location): return

				try:
					os.makedirs(folder_location)
				except FileExistsError:
					pass
				
				with open(file_location, 'wb') as f:
					f.write(download_pdf(packageid, version).content)

			thread = threading.Thread(target = do_something, args = (browse_path_alias, year, packageid, version))
			threads[identifier] = thread
	
	stuff = set()
	for identifier in threads:
		court, year, _, _ = identifier
		stuff.add((court, year))
	print('There are {:d} court/year combinations'.format(len(stuff)))
	
	print('There are {:d} pdfs to download'.format(len(threads)))
	for identifier in threads:
		thread = threads[identifier]
		thread.start()
	for identifier in threads:
		thread = threads[identifier]
		thread.join()
