# FederalProsecutors

### Repository Structure

| Files | Description |
| :--- | :--- |
| DownloadPDFs.py | Run this to download all pdfs with version number 0 from https://www.govinfo.gov/app/collection/uscourts/. |
| ExtractText.py | After running DownloadPDFs.py, run this to extract the text from the pdfs. Run `python ExtractText.py usage` to see its usage. |
| LoadIntoDatabase.py | After running ExtractText.py, run this to load the extracted information into a MongoDB database. |
| CreateCleaned.py | After running LoadIntoDatabase.py, run this to create the pdf_text_cleaned key for each pdf. It concatenates the text of each page of a pdf together and removes special characters. |
| CreateDuct.py | After running CreateCleaned.py, run this to create the contains_duct key for each pdf. Searching for nonexistence of the string 'duct' in pdf_text_cleaned can be used to filter out pdfs that do not mention the phrase "prosecutorial misconduct" in its text. |
| CreateKeywords.py | After running CreateCleaned.py, run this to create the contains_keyword key for other keywords like vacate or overturn for each pdf. These keywords can also be used to filter out pdfs. |
| FlagMentions.py | After running the above scripts, run this to recreate a csv file for the RoughAll sheet from the Mentions of prosecutorial misconduct spreadsheet. |
| CreateUSInTitle.py | Used to create the USInTitle column of the RoughAll sheet of the Mentions of prosecutorial misconduct spreadsheet. |
| FindSectionHeaders.py | Used to determine section headers of a PDF. This program operates on PDFs themselves, not on the text extracted by ExtractText.py. This program is a work in progress. |
| pages.tar.gz | The compressed output of ExtractText.py. Use `tar xzvf pages.tar.gz` to extract. Then, you can move the decompressed files into the right folder and run LoadIntoDatabase.py. This file might not be included in this repository due to its size of about 1.3 GB. |
| SetupAWS.sh | Used to set up a freshly launched AWS instance. |
| README.md | This file. |

For python files, additional information is in comments at the top of each file.

### Scraping Data

Use the Google Chrome web browser. Go to https://www.govinfo.gov/app/collection/uscourts/. Hit F12 to open Developer Tools. Go to the Network tab. On the web page, when you click to expand a dropdown menu like Appellate for the first time, you will see in Developer Tools an HTTP request. You can click on it to see more details about the request and the response. In the Headers tab, you see information about the Request URL, Request Method, Status Code, Request Headers, and Parameters. In the Preview tab, you can navigate through the returned JSON object. The value of childNodes contain information about the dropdown menus or rows of a table that are right below the dropdown menu that was clicked. The value of nodeValue is information about the dropdown menu that was clicked. Using the python requests library (`pip install requests`), one can programmatically send these requests to scrape all the data from the website. In doing so, you will encounter keys for browsePathAlias, court code, and zero-padded case number.

| Court code | Court name |
| :--- | :--- |
| ca1 | United States Court of Appeals for the First Circuit |
| ca2 | United States Court of Appeals for the Second Circuit |
| ca3 | United States Court of Appeals for the Third Circuit |
| ca4 | United States Court of Appeals for the Fourth Circuit |
| ca5 | United States Court of Appeals for the Fifth Circuit |
| ca6 | United States Court of Appeals for the Sixth Circuit |
| ca7 | United States Court of Appeals for the Seventh Circuit |
| ca8 | United States Court of Appeals for the Eighth Circuit |
| ca9 | United States Court of Appeals for the Ninth Circuit |
| ca10 | United States Court of Appeals for the Tenth Circuit |
| ca11 | United States Court of Appeals for the Eleventh Circuit |
| caDC | United States Court of Appeals for the District of Columbia Circuit |
| ca13 | United States Court of Appeals for the Federal Circuit |

In this project's documentation, the zero-padded case number may sometimes be referred to as case_number_z. It always has 2 digits, followed by a dash, followed by 5 digits. The case number displayed on the PDF should always have 2 digits, followed by a dash, followed by zero or more digits. To determine the case_number_z from the unpadded case number, insert zeros to the right of the dash until there are 5 digits on the right of the dash.

If you expand a dropdown menu for the second time, there might not be another HTTP request in Developer Tools. Refresh the page to reset. Make sure that the URL is https://www.govinfo.gov/app/collection/uscourts/ or else some dropdown menus might start opened.

When sending an HTTP reqeuest for a given court's year, only 100 results will be shown at a time. Using the request parameters, you can provide the page number of results to receive to find information about all the cases from that court from that year.

On the website, clicking on a case's PDF or DETAILS button will go to a new website. Once again, using the python requests library, one can scrape all the PDFs or further documented details about the case. In the DETAILS page, there are also additional downloads. The ZIP download has every other download and also checksums. The MODS download contains some information about the case, like the names of some of the parties. It may be worth looking at the MODS download to see if there is useful information. The Nature of Suit field in the Summary in DETAILS is not always filled in.

Some cases have multiple appellants. In this case, each appellant is given their own case number, but the text of the PDF will be the same for each except for the modified case number. The case numbers for all the appellants will usually be listed together in the PDF or in the Docket Text in the Summary of the DETAILS page. The appellants may or may not be listed together as parties for each case number.

In the nodeValue of the child of a court's year, which has information about a case, there are the granuleid, packageid, pdf, and pdffile keys. You'll see that the granuleid is the packageid, followed a dash, followed a number. The final number is what is referred to in the documentation of this project as the version number. The initial PDF for a case contains the decision and has version number 0. Every PDF to follow will have a higher version number and be errata sheets, dissenting opinions, or other supporting documents. Most of the code in this project ignores all PDFs will version number greater than 0.

You may observe that the pdffile value is the packageid, followed by a forward slash, followed by the pdf value. You may also observe that the pdf value is "pdf/" followed by the granuleid, followed by ".pdf". You may also observe that the packageid is "USCOURTS-" followed by the court code, followed by the zero-padded case number. These are always the case.

It is not the case that the case_number_z is unique. It is the case that the combination of court code, year, and case_number_z is unique.

It may be the case that there is no version number in the granuleid.

There are about 270,000 PDFs. This figure includes PDFs with version numbers higher than 0. It may be the case that there is no PDF available on this website for a given case number. These are an incredibly small minority of all the cases. The PDF may be available on another website. Downloading all of the PDFs will use somewhere from about 60GB to 125GB. After extracting the text using ExtractText.py, the text uses no more than 5GB. Compressed, it uses about 2GB. After loading in to a MongoDB database, it uses no more than 8GB.

Beware that some PDFs contain images and not text. A quick analysis of the data leads me to believe that about 3,000 PDFs have images, not text.

### Running Scripts

If a script that uses MongoDB runs for more than 24 hours, see if it is possible to optimize the database queries by creating an index. Running ExtractText.py with the all parameter may take several days or weeks. Its work is embarrassingly parallelizable, so its jobs can be set up to run in parallel on a big computing cluster like the BU SCC. Then, it would take about 6 hours. Running code on a computing cluster usually involves additional setup to the environment. You can investigate the code to see what each of ExtractText.py's jobs are working on. Otherwise, each python script should terminate within 24 hours.

The data was processed on an Amazon AWS EC2 t2.medium instance, except that ExtractText.py was run on the BU SCC. A t2.micro is too small. I remember running into memory issues when using the MongoDB database on the t2.medium when iterating over all the documents, looking for specific features. This caused the instance to hang and need to be rebooted, but then it would run with less memory usage after rebooting and the computation would succeed. Perhaps memory from the old computation was prevented from being used in the new computation.

The AMI used was Ubuntu Server 20.04 LTS (Free tier eligible). The SetupAWS.sh was used to set up python, pip, and MongoDB so that the python scripts would work. Python scripts can be uploaded via scp and then run. The outputs can be downloaded using scp.

At the moment, the python scripts use a MongoDB database.
They will connect to the MongoDB server at localhost:27017, use the database named Intercept, and use a collection named AppellateCourtOpinions.

The python code that uses the PyMongo library to connect to the MongoDB database is:

```
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client['Intercept']
collection = db['AppellateCourtOpinions']
```

After the data is loaded into the database and processed, it becomes easy to use database queries to find out about the data or write a python script to iterate over all the PDFs and compile information into a csv file for use on Google Sheets.

The pages.tar.gz file is the compression of the output of ExtractText.py. It is included to jumpstart the creation of the database. It can be decompressed using `tar xzvf pages.tar.gz`. The files may or may not be decompressed to a location that is suitable for use by LoadIntoDatabase.py. Read the comments of ExtractText.py to see where its output belongs. The pages.tar.gz file was created approximately on March 1, 2021, so it will be missing PDFs that were uploaded after that time. If you want to work on PDFs after that time, running DownloadPDFs.py and ExtractText.py again will handle all the PDFs.