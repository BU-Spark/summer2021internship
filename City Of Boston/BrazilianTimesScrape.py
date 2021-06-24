import time

import requests
from bs4 import BeautifulSoup
import csv
import random

base_url = "https://www.braziliantimes.com/noticias/comunidade-brasileira/{}"
article_list = []

for page in range(1, 400):
    print(page)
    page_url = base_url.format(page)
    raw = requests.get(page_url).content
    cleaned = BeautifulSoup(raw, features="lxml")

    post_lists = cleaned.findAll("ul", {"class": "posts-list"})
    for indv_list in post_lists:
        for article in indv_list.findAll("a"):
            link = article["href"]
            if link not in article_list:
                article_list += [article["href"]]
    time.sleep(3)

with open("brazilian_times_scrape.csv", 'w', newline='') as csv_file:
    output = csv.writer(csv_file)
    output.writerow(['url'])
    for article in article_list:
        output.writerow([article])