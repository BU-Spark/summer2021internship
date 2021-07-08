#import selenium and related libraries to data scrapping
import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import sys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

#import mysql and related libraried to database activity
# import mysql.connector
# from mysql.connector import Error

#set driver:
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
# driver = webdriver.Chrome(executable_path='/Users/shahafdan/Downloads/chromedriver.exe')
driver.get('https://sampan.org/category/boston/')
# driver.maximize_window()
print("------------ SAMPAN OPENED SUCCESSFULLY")


#---- FUNCTIONS -----
def formatDate(oldDate):
    months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    dateParts = oldDate.split()
    m_indx = str(months.index(dateParts[0]) + 1)
    if (len(m_indx) == 1):
        month = "0" + m_indx
    else:
        month = m_indx
    day = dateParts[1][:-1]
    if (len(day) == 1):
        day = "0" + day
    newDate = dateParts[2] + month + day
    return newDate


#collect links from each page
links = []
date = "20210705" 
counter = 1
while date > "20200101":
    articles = driver.find_elements_by_css_selector('article')
    print(" >> Found number of articles:\t\t" + str(len(articles)))
    for a in articles:
        link = a.find_elements_by_xpath("./div/header/h3/a")[0].get_attribute("href")
        links.append(link)
        date = a.find_elements_by_xpath("./div/header/div/div/time")[0].text
        date = formatDate(date)
        print(str(link) + " \t :: \t " + str(date))

    counter += 1
    driver.get('https://sampan.org/category/boston/page/'+str(counter))
    #click the previous article buttons
    #update date of earliest article
    #modify date to match pattern

#define a general article structure
class sampanArticle:
    def __init__(self, date, text, title):
        self.date = date
        self.text = text
        self.title = title


articleString = ""
file = open("sampan-results.txt", "w")
for l in links:
    pass
    #open link
    driver.get(l)
    #collect date
    date = formatDate(driver.find_element_by_xpath("//main/div/div/div/article/header/div/div/time").text)
    #collect title
    title = driver.find_element_by_xpath("//main/div/div/div/article/header/h1").text
    #collect text
    text = driver.find_element_by_xpath("//main/div/div/div/article/div/div/div").text
    articleString = date + "\n" + title + "\n" + text + "\n ---------------------- \n"
    file.write(articleString)

file.close()



