

import os
import sys

import re
import csv

import pymongo

# Searches the MongoDB database for text that contains the phrase 'prosecutorial misconduct'.
# Writes output to a csv file.
# Each row is a flagged mention of prosecutorial misconduct.
# Beware that not all mentions of prosecutorial misconduct are flagged and not all flagged mentions are mentions of prosecutorial misconduct.

# court : court code
# year : year
# case_number_z : zero-padded case number
# surrounding_text50 : surrounding_text plus up to 50 characters to the left and up to 50 characters to the right.
# surrounding_text : the text that was flagged as a mention of 'prosecutorial misconduct'
# distance : edit distance (add and delete only) between surrounding_text and 'prosecutorial misconduct'
# left_bound : number of characters to the left of surrounding_text. Used to see where in the document the mention is.
# pdf_min_distance : minimum of distance for all flagged mentions from a single PDF.
# num_occurrences0 : number of flagged mentions with distance 0 from a single PDF.

# Connect to MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Intercept']
collection = db['AppellateCourtOpinions']

# This gives the edit distance with only insertion and deletion allowed
def edit_distance(str1, str2):
	return len(str1) + len(str2) - 2 * longest_common_subsequence_length(str1, str2)

def longest_common_subsequence_length(str1, str2):
	arr = [[0 for _ in range(len(str2) + 1)] for _ in range(len(str1) + 1)]
	for i in range(len(arr)):
		for j in range(len(arr[i])):
			if i == 0 or j == 0:
				arr[i][j] = 0
			elif str1[i - 1] == str2[j - 1]:
				arr[i][j] = 1 + arr[i - 1][j - 1]
			else:
				arr[i][j] = max(arr[i - 1][j], arr[i][j - 1])

	return arr[-1][-1]

documents_to_process = collection.find(
	{
		'pdf_text_cleaned': {'$exists': True},
		'contains_duct': True,
	},
	{
		'pdf_text_cleaned': 1,
		'court': 1,
		'year': 1,
		'case_number_z': 1,
	},
)

out = []
for document_index, document in enumerate(documents_to_process):
	if document_index % 1000 == 0:
		print(
			'Documents processed : {:8d}'.format(
				document_index,
			),
			end = '\r',
		)
	text = document['pdf_text_cleaned']
	
	findings = []
	
	DISTANCE_LIMIT = 18
	
	num_occurrences0 = 0
	min_distance = DISTANCE_LIMIT
	
	index = text.find('duct')
	while index != -1:
		try:
			left_bound = index - len('prosecutorial misconduct') + len('duct')
			right_bound = index + 4
			left_bound = max(0, left_bound)
			right_bound = min(len(text), right_bound)
			
			surrounding_text = text[left_bound:right_bound]
			if 'prosecuted' in surrounding_text: continue
			distance = edit_distance(surrounding_text, 'prosecutorial misconduct')
			if distance > DISTANCE_LIMIT: continue
			
			left_bound6 = max(0, left_bound - 6)
			right_bound0 = min(len(text), right_bound + 0)
			surrounding_text_6_0 = text[left_bound6:right_bound0]
			if longest_common_subsequence_length('prosecutorial misconduct', surrounding_text_6_0) + 5 < len('prosecutorial misconduct'): continue
			
			left_bound50 = max(0, left_bound - 50)
			right_bound50 = min(len(text), right_bound + 50)
			surrounding_text50 = text[left_bound50:right_bound50]
			
			court = document['court']
			year = document['year']
			case_number_z = document['case_number_z']
			
			findings += [
				(
					court,
					year,
					case_number_z,
					surrounding_text,
					surrounding_text50,
					distance,
					left_bound,
				)
			]
			
			if distance < min_distance:
				min_distance = distance
			if distance == 0:
				num_occurrences0 += 1
		finally:
			# Update loop variables
			index = text.find('duct', index + 1)
	
	for finding in findings:
		out += [finding + (min_distance, num_occurrences0)]

with open('rough_info.csv', 'w') as f:
	fieldnames = [
		'court',
		'year',
		'case_number_z',
		'surrounding_text50',
		'surrounding_text',
		'distance',
		'left_bound',
		'pdf_min_distance',
		'num_occurrences0',
	]
	writer = csv.DictWriter(f, fieldnames=fieldnames)
	writer.writeheader()

	for x in out:
		court, year, case_number_z, surrounding_text, surrounding_text50, distance, left_bound, pdf_min_distance, num_occurrences0 = x
		
		surrounding_text = surrounding_text.replace('\n', ' ')
		surrounding_text50 = surrounding_text50.replace('\n', ' ')
		
		writer.writerow(
			{
				'court': court,
				'year': year,
				'case_number_z': case_number_z,
				'surrounding_text50': surrounding_text50,
				'surrounding_text': surrounding_text,
				'distance': distance,
				'left_bound': left_bound,
				'pdf_min_distance': pdf_min_distance,
				'num_occurrences0': num_occurrences0,
			}
		)