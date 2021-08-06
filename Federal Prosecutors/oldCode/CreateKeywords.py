

import os
import sys

import pdfplumber

import pymongo

# Creates contains_keyword in the MongoDB database.

# Connect to MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Intercept']
collection = db['AppellateCourtOpinions']

def register_keyword(keyword):
	documents_to_process = collection.find(
		{
			'pdf_text_cleaned': {'$exists': True},
			'contains_{:s}'.format(keyword): {'$exists': False},
		},
		{
			'pdf_text_cleaned': 1,
		},
	)

	for document in documents_to_process:
		result = collection.update_one(
			{
				'_id': document['_id']
			},
			{
				'$set': {
					'contains_{:s}'.format(keyword): keyword in document['pdf_text_cleaned'],
				},
			},
		)
		assert result.matched_count == 1
		assert result.modified_count == 1
		assert result.acknowledged
		assert result.raw_result['n'] == 1
		assert result.raw_result['nModified'] == 1
		assert result.raw_result['updatedExisting']
		assert result.upserted_id is None

keywords = (
	'affirm',
	'overturn',
	'remand',
	'vacate',
	
	'reverse',
	
	'harm',
	'less',
	'error',
	
	'with',
	'hold',
	'evi',
	
	'will',
	'full',
	'ig',
	'nor',
	'ance',
	
	'prejudic',
	
	'egre',
	'ous',
	
	'draw',
	
	'dis',
	'miss',
	
	'deny',
)

for keyword in keywords:
	register_keyword(keyword)