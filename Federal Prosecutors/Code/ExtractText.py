

# Extracts text from pdfs
#
# At the moment, it looks for downloads the pdf to a location in the data/pdf/ folder.
# The pdfs must be at data/pdf/appellate/AAAAA/BBBBB/USCOURTS-AAAAA-CCCCC-0.pdf
#   where AAAAA is the court code,
#         BBBBB is the year,
#         CCCCC is the zero-padded case number
# For example, a pdf can be found at data/pdf/appellate/ca1/2001/USCOURTS-ca1-00-01824-0.pdf.
#
# The output of the program is a collection of text files, one for each court/year combination.
# The text file contains a python object serialized using pickle.
# The python object is a list that contains information about each pdf, including its text.
# At the moment, the text files are written to the data/pages/ folder.
#
# There is a bug where line breaks in the pdf are not detected, so the two words before and after the line break are concatenated.
# This bug can be fixed by examining the y position of the characters to determine where the line breaks are.
#
# This program also does not detect characters if they are displayed in an image in the pdf. The characters must be highlightable in a PDF viewer in order to be detected. In other words, there is no optical character recognition implemented.

import os
import sys

import pickle
import re

import pdfplumber

def pdf_to_pages_text(file_name):
	pages_text = []

	with pdfplumber.open(file_name) as pdf:
		for page_index, page in enumerate(pdf.pages):
			assert page.page_number == 1 + page_index
			
			text = ''
			for c in page.chars:
				text += c['text']
			
			pages_text.append(text)
			
	return pages_text

# Takes all the pdfs for that court code and year, extracts the text, combine them into a python list, serializes it using pickle, and writes it to a text file.
def do_for_court_year(court, year):
	out = []
	pdf_file_names = os.listdir(os.path.join(path, court, '{:d}'.format(year)))
	for i, file_name in enumerate(pdf_file_names):
		pdf_location = os.path.join(path, court, '{:d}'.format(year), file_name)
		print(
			'{:8d} / {:8d} {:s}'.format(
				i,
				len(pdf_file_names),
				pdf_location,
			),
		)
		sys.stdout.flush()
		
		pages_text = pdf_to_pages_text(pdf_location)
		
		pattern = r'USCOURTS-(ca(?:\d\d?|DC))-(\d{2}-\d{5})-(\d*).pdf'
		pattern = re.compile(pattern)
		match = re.match(pattern, file_name)
		case_number_z = match.expand(r'\2')
		version = int(match.expand(r'\3'))
		assert version == 0
		assert match.expand(r'\1') == court
		
		pdf_info = {
			'pdf_pages_text': pages_text,
			'court': court,
			'year': year,
			'case_number_z': case_number_z,
		}
		
		out += [pdf_info]

	write_folder = 'data/pages/'
	try:
		os.makedirs(write_folder)
	except FileExistsError:
		pass
	with open(os.path.join(write_folder, '{:s}_{:d}.txt'.format(court, year)), 'wb') as f:
		f.write(pickle.dumps(out))

pdf_locations = []
path = 'data/pdf/appellate'
court_years = []
for court in os.listdir(path):
	for year in os.listdir(os.path.join(path, court)):
		court_years += [(court, year)]
if len(court_years) > 500: raise RuntimeError
court_years = sorted(court_years)

if len(sys.argv) == 1:
	print(len(court_years))
elif len(sys.argv) == 2:
	if sys.argv[1] == 'all':
		for court, year in court_years:
			year = int(year)
			do_for_court_year(court, year)
		print('script is finished')
	elif sys.argv[1] == 'usage':
		print('python ExtractText.py [arg]')
		print()
		print('If arg is not provided, it prints out the number of jobs that need to be run.')
		print('Job numbers are zero indexed, so if there are 3 jobs, then you need to run jobs 0, 1, and 2.')
		print('To run job number i, use python ExtractText.py i. For example, python ExtractText.py 0 runs job number 0.')
		print('To run all jobs, one after the other, use python ExtractText.py all.')
		print('To print this message, use python ExtractText.py usage.')
	else:
		index = int(sys.argv[1])
		if index < len(court_years):
			court, year = court_years[index]
			year = int(year)
			do_for_court_year(court, year)
		print('script is finished')
else:
	print('Give at most 1 argument.')
