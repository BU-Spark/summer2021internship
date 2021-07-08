from bs4 import BeautifulSoup
import requests
import pandas as pd
import re
from datetime import datetime

article_list = []
PAGES = 70

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
}
base_url = "https://elmundoboston.com/category/boston-metro-area/page/{}/"

df = pd.DataFrame(columns=['Date', 'URL', 'Title', 'Article'])
index = 0

for page_num in range(1, PAGES+1):
    url = base_url.format(page_num)
    raw = requests.get(url, headers=headers).content
    cleaned = BeautifulSoup(raw, "html.parser")

    upper_block = cleaned.find("div", {"id": "tdi_17"})
    lower_block = cleaned.find("div", {"class": "td-ss-main-content"})

    upper_articles = upper_block.findAll("h3", {"class": "entry-title td-module-title"})
    lower_articles = lower_block.findAll("h3", {"class": "entry-title td-module-title"})

    articles = upper_articles + lower_articles
    # articles = cleaned.findAll("h3", {"class": "entry-title td-module-title"})
    for article in articles:
        df.loc[index, 'URL'] = article.find("a")["href"]
        index += 1

df.drop_duplicates(subset=['URL'], keep='first', inplace=True, ignore_index=True)

for index in df.index:
    url = df.loc[index, 'URL']
    raw = requests.get(url, headers=headers).content
    cleaned = BeautifulSoup(raw, 'html.parser')

    date = cleaned.find('span', {'class': 'td-post-date'}).find('time')["datetime"][:10] # get the date
    title = cleaned.find('header', {'class': 'td-post-title'}).find("h1", {"class": 'entry-title'}).text  # get the title text
    article = cleaned.find('div', {'class': 'td-post-content'}).text  # get the article text
    article = re.sub('[\t\n\r\s]+', ' ',
                     article).strip()  # replace multiple tab, newline or whitespace with single space
    df.loc[index, ['Date', 'Title', 'Article']] = [date, title, article]  # save data to dataframe

# convert date column to datetime object
df['Date'] = df['Date'].apply(lambda x: datetime.strptime(x,'%Y-%m-%d'))

df.sort_values(by='Date', ascending=False, inplace=True) # sort dataframe by date
df.reset_index(drop=True, inplace=True)
df.drop(df[df.Date.dt.year==2019].index, inplace=True)
df.reset_index(drop=True, inplace=True)

df.to_csv('ElMundo_Jan2020_to_Jun2021.csv', encoding='utf-8', index=False)
