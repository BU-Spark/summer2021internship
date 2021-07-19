from collections import defaultdict
import nltk
import pandas as pd
import os
import re
import json


data_file_name_dict = {
    '2014':'bostonglobe2014.csv',
    '2015':'bostonglobe2016.csv',
    '2016':'bostonglobe2015.csv',
    '2017':'bostonglobe2017.csv',
    '2018':'bostonglobe2018.csv',
}

quoted = re.compile('"[^"]*"')


def tokenize(text, split_tokens=False):
    "extract tokens from given string of text"
    tokens = []
    for token in nltk.word_tokenize(text):
      if (token.isalnum() or (token.find('-') > 0)):
        tokens.append(token)
    if split_tokens:
      return tokens
    else:
      return " ".join(tokens)


def clean_text(text):
    text = re.sub(r"['\['\]]", "", text)
    text = text.replace('\r', '').replace('\n', '')
    return text
    
def extract_quotes(text):
    """
        (Deprecated)
        extract all sentences from string of text and then extract quotes in each setence
    """
    text = clean_text(text)
    sentences = nltk.sent_tokenize(text)
    quotes = []
    for sentence in sentences:
        current_quotes = quoted.findall(sentence)
        if (len(current_quotes)> 0):
            quotes.extend(current_quotes)
    return  quotes


def process_files(file_names):
    """
        Process data frames and extract quotes 
    """
    print("cleaning boston globe articles")
    data_frames = {}
    for key, val in file_names.items():
        df = pd.read_csv(f'data/raw/{val}')
        df.dropna(axis=0, how='any', thresh=None, subset=None, inplace=True)
        df['quotes'] = df['text'].apply(extract_quotes)
        df.to_csv(f'data/processed/quotes-{key}.csv')
        data_frames[f"{key}"] = df
    return data_frames

def clean_articles(text):
    text = clean_text(text)
    text = text.replace('\n',' ')
    text = text.replace('\t', ' ')
    text = text.replace('\n',' ')
    return text

def generate_clean_text_file(file_names):
    """
        Process data frames and store them in text format for quotes to be extracted with Core NLP(https://stanfordnlp.github.io/CoreNLP/quote.html)
    """
    print("generating text files from articles")
    for key, val in file_names.items():
        df = pd.read_csv(f'data/raw/{val}')
        df.dropna(axis=0, how='any', thresh=None, subset=None, inplace=True)
        df['text'] = df['text'].apply(clean_articles)
        df.to_csv(f'data/processed/bostonglobe-{key}.txt', sep='\t', header=None, index=False)

def extract_quotes_from_json(file_path, quotes_dict):
    """
        Parse all content extracted by the Core NLP pipeline and 
        store the quotes and their respective authors in a dict 
    """
    with open(file_path) as f:
        file = json.load(f)
        for item in file["quotes"]:
            if item['speaker'] != 'Unknown':
                quotes_dict[item['speaker']].append(item['text'])


def extract_and_attribute_quotes():
    """
        iterate through every folder in the extracted_details directory and 
        extract and attribute their quotes to thei respective authors 
    """
    extracted_details_path = 'data/processed/extracted_details'
    for folder in os.listdir(extracted_details_path):
        folder_path = f"{extracted_details_path}/{folder}"
        all_quotes  = defaultdict(list)
        if os.path.isdir(folder_path):
            for file_name in os.listdir(folder_path):
                file_path = f"{folder_path}/{file_name}"
                if (file_name.endswith('.json')):
                    extract_quotes_from_json(file_path, all_quotes)

        df = pd.DataFrame.from_dict(all_quotes, orient='index')
        print(df.head(20))
        df.to_csv(f'data/processed/extracted_quotes/bostonglobe-{folder}.csv')






if __name__ == '__main__':
#    data_frames = process_files(data_file_name_dict)
#    data_frames = generate_clean_text_file(data_file_name_dict)
    data_frames = extract_and_attribute_quotes()