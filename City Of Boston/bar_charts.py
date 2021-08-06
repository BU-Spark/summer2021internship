import pandas as pd
import datetime as dt
from datetime import datetime
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as ani

keywords = pd.read_csv('https://raw.githubusercontent.com/zahradaniar/summer2021internship/master/City%20Of%20Boston/spanish_keywords_and_categories.csv', header=None)
keywords = keywords.rename(columns={0: 'category', 1: 'keyword'})
keyword_dict = {}

for index, keyword in keywords.iterrows():
    keyword_dict[keyword[1]] = {'cat': keyword[0], 'count': 0}
keywords['occs'] = 0

articles = pd.read_csv('https://raw.githubusercontent.com/singerep/summer2021internship/COB-ElMundo/City%20Of%20Boston/data/ElMundo_Jan2020_to_Jun2021.csv').dropna()

for index, article in articles.iterrows():
    article_text = article['Article'].lower().split()
    for word in article_text:
        if word in keyword_dict:
            keyword_dict[word]['count'] += 1

results = pd.DataFrame.from_dict(keyword_dict, orient='index')
results['name'] = results.index

covid_related_df = results[(results['cat'] == 'Covid-19 Related') & (results['count'] > 0)].sort_values(by='count', ascending=False)
ax = covid_related_df.plot.bar(x='name', y='count', rot=-45)
ax.set_title('El Mundo: Most Popular Covid-19 Related Terms')
ax.set_xlabel('Term')
ax.set_xlabel('Count')

fig = ax.get_figure()
fig.tight_layout()
fig.savefig('popular_covidRelated.jpg')
plt.show()

recovery_df = results[(results['cat'] == 'Economic Recovery') & (results['count'] > 0)].sort_values(by='count', ascending=False)
ax = recovery_df.plot.bar(x='name', y='count', rot=-45)
ax.set_title('El Mundo: Most Popular Economic Recovery Related Terms')
ax.set_xlabel('Term')
ax.set_xlabel('Count')

fig = ax.get_figure()
fig.tight_layout()
fig.savefig('popular_recovery.jpg')
plt.show()

symptoms_df = results[(results['cat'] == 'Covid-19 Symptoms') & (results['count'] > 0)].sort_values(by='count', ascending=False)
ax = symptoms_df.plot.bar(x='name', y='count', rot=-45)
ax.set_title('El Mundo: Most Popular Covid-19 Symptom Related Terms')
ax.set_xlabel('Term')
ax.set_xlabel('Count')

fig = ax.get_figure()
fig.tight_layout()
fig.savefig('popular_covidSymptoms.jpg')
plt.show()