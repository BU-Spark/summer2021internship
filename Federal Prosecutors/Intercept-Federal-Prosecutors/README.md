# Intercept-Federal-Prosecutors
A Nationwide Investigation for Federal Prosecutors

Code for BU Spark! Summer 2021

The code for this project relies on the Google Cloud Vision Api. To install and get started with it, please follow steps 1-6 in this codelab for the API. Use this link to set up the API Authentication Key and save it to your computer (and be sure to set the path as an environment variable using a .env file): https://cloud.google.com/vision/docs/libraries 

In the Google Cloud Storage Bucket, there will be folders for pdf files and text files. Each of these folders is broken down by circuit and then by case ID. In the text folders there will be output JSON files containing the raw text of each case along with a .txt file containing the full text only if the case mentioned "prosecutorial misconduct". However, the text can be extracted from the JSON files so even if a case does not have a .txt file in its folder, it can be extracted later if desired. 

# How to Run Scraper (Date last scraped: July 14):
## Bash Script:
    1. Inside ScrapeDecisions.py, change the date to the date which was last scraped
    2. Inside the project directory, open terminal and enter this command: sh pipeline.bash (this can take several hours to finish)
    3. The result will be three spreadsheets: newCases.csv (contains list of all newly identified cases), newCasesWithMentions.csv (contains list of all cases which mentioned prosecutorial misconduct) and scores_added.csv (final output, contains cases + scores based on keywords)

## To run each part of scraper individually, do so in this order:
    1. ScrapeDecisions.py: Submits GET requests to API to find all new cases on appellate court website and saves their PDF links in a spreadsheet called NewCases.csv (Must change date to last scraped date)
    2. download_pdfs_v2.py: Downloads all PDFs from NewCases.csv and uploads to GCS (~50 minutes for 6,000 cases)
    3. FilterDecisions.py: Extracts all text from PDFs using Vision API, saves text if and only if it mentions prosecutorial misconduct and saves a copy of the NewCases spreadsheet with only the cases that had mentions. Returns newCasesWithMentions.csv. (14 hr for ~6000 cases)
    4. FindDecisionKeywords.py: Checks the text of all cases given by a spreadsheet for certain keywords and adds score columns based on the frequency of certain keywords. Returns scores_added.csv.

