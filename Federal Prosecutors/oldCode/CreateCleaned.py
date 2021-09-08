

import os
import sys

import pdfplumber

import pymongo

# Creates pdf_text_cleaned in the MongoDB database.

spec_chars = ["!",'"',"#","%","&","'","(",")",
	"*","+",",","-",".","/",":",";","<",
	"=",">","?","@","[","\\","]","^","_",
	"`","{","|","}","~","–", "\xc2", "\xa0",
	"\x80", "\x9c", "\x99", "\x94", "\xad", "\xe2", "\x9d"]

# Connect to MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Intercept']
collection = db['AppellateCourtOpinions']

documents_to_process = collection.find(
	{
		'pdf_text_cleaned': {'$exists': False},
	},
	{
		'pdf_pages_text': 1
	},
)

for document in documents_to_process:
	pages_text = document['pdf_pages_text']
	assert isinstance(pages_text, list)
	assert len(pages_text) > 0
	for page_text in pages_text:
		assert isinstance(page_text, str)
		assert len(page_text) > 0
		
	text = '\n'.join(pages_text)

	for char in spec_chars:
		text = text.replace(char, ' ')

	text = text.lower()

	result = collection.update_one(
		{
			'_id': document['_id']
		},
		{
			'$set': {
				'pdf_text_cleaned': text,
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