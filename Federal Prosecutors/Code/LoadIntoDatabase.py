

# Takes the output of ExtractText.py and writes it into a MongoDB database.
# After a text file from the output of ExtractText.py is processed, that text file is deleted.

import os
import sys

import pickle
import pymongo

# Connect to MongoDB
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Intercept']
collection = db['AppellateCourtOpinions']

collection.create_index([
	('year', -1),
	('court', 1),
	('case_number_z', 1),
])

path = 'pages'
file_names = os.listdir(path)
file_names = sorted(file_names)
for i, file_name in enumerate(file_names):
	print(i, len(file_names))
	file_location = os.path.join(path, file_name)
	
	with open(file_location, 'rb') as f:
		content = f.read()
		
	documents = pickle.loads(content)
	
	for j, document in enumerate(documents):
		print('a', j, len(documents))
		# Skip if file has been processed in database already
		count = collection.find({
			'court': document['court'],
			'year': document['year'],
			'case_number_z': document['case_number_z'],
		}).count()
		assert count <= 1
		if count > 0: continue
		
		# Add to database
		collection.insert_one(
			document,
		)
	os.remove(file_location)