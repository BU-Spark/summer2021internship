

import os
import sys

import pdfplumber

import pymongo

# Creates contains_duct in the MongoDB database.

# Connect to MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Intercept']
collection = db['AppellateCourtOpinions']

documents_to_process = collection.find(
	{
		'pdf_text_cleaned': {'$exists': True},
		'contains_duct': {'$exists': False},
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
				'contains_duct': 'duct' in document['pdf_text_cleaned'],
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