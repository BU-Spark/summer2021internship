import pandas as pd
import datetime as dt
from datetime import datetime
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as ani


def last_weekday(day, weekday):
    days_behind = day.weekday() - weekday
    return day - dt.timedelta(days_behind)


# create results df
start = pd.to_datetime("1/5/2020")
end = pd.to_datetime("today")
results_df = pd.date_range(start, end, freq="D")
results_df = pd.DataFrame(results_df).set_index(0)

results_df["Covid-19 Related"] = 0
results_df["Covid-19 Symptoms"] = 0
results_df["Travel & Outdoor Activities"] = 0
results_df["Economic Recovery"] = 0
results_df["Retail"] = 0

keywords = pd.read_csv('https://raw.githubusercontent.com/zahradaniar/summer2021internship/master/City%20Of%20Boston/spanish_keywords_and_categories.csv', header=None)
keyword_dict = {}

for index, keyword in keywords.iterrows():
    keyword_dict[keyword[1]] = keyword[0]

articles = pd.read_csv('https://raw.githubusercontent.com/singerep/summer2021internship/COB-ElMundo/City%20Of%20Boston/data/ElMundo_Jan2020_to_Jun2021.csv').dropna()

for index, article in articles.iterrows():
    article_text = article['Article']
    for keyword in keyword_dict:
        category = keyword_dict[keyword]
        if keyword in article_text:
            for delta in range(0, 7):
                day = (datetime.strptime(article['Date'], '%Y-%m-%d') + dt.timedelta(delta)).strftime('%Y-%m-%d')
                result_spot = results_df.loc[day]
                result_spot[category] += 1

for index, article in articles.iterrows():
    article_text = article['Article'].split()
    for word in article_text:
        if word in keyword_dict:
            category = keyword_dict[word]
            for delta in range(0, 7):
                day = (datetime.strptime(article['Date'], '%Y-%m-%d') + dt.timedelta(delta)).strftime('%Y-%m-%d')
                result_spot = results_df.loc[day]
                result_spot[category] += 1

color = ['red', 'green', 'blue', 'orange', 'purple']
fig = plt.figure()
plt.xticks(rotation=45, ha="right", rotation_mode="anchor")
plt.subplots_adjust(bottom=0.2, top=0.9)
plt.ylabel('Occurrences')
plt.xlabel('Date')
plt.title('El Mundo Boston Category Frequency (Rolling 7 Day Average)')

def buildmebarchart(i=int):
    plt.legend(results_df.columns, loc='upper left')
    p = plt.plot(results_df[:i].index, results_df[:i].values)
    for i in range(0, 5):
        p[i].set_color(color[i])

animator = ani.FuncAnimation(fig, buildmebarchart, interval = 75, repeat=False, frames=600)
# plt.show()

animator.save("category_byDay_7dayAvg.gif")