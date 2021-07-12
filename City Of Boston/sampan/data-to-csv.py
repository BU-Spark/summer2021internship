import numpy as np
lines = []
from csv import writer
with open('sampan-results.txt') as f:
    lines = f.readlines()
    counter = 0
    date, title, text = "", "", ""
    file = open('data.csv', 'a')
    for line in lines:
        if counter == 0:
            date = line.strip()
            counter += 1
        elif counter == 1:
            title = line.strip()
            counter += 1
        elif counter == 2:
            if line.strip() == "----------------------":
                counter = 0
                finalline = [date, title, text]
                date, title, text = "", "", ""
                csv_wrtr = writer(file)
                csv_wrtr.writerow(finalline)
            else:
                text += line
            
            
