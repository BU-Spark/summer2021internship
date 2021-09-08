#!/usr/bin/env bash

python ScrapeDecisions.py &&
python download_pdfs_v2.py && 
python FilterDecisions.py && 
python FindDecisionKeywords.py

