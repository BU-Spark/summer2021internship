import re
import pandas as pd
import nltk


data_file_name_dict = {
    '2014':'bostonglobe2014.csv',
    '2015':'bostonglobe2016.csv',
    '2016':'bostonglobe2015.csv',
    '2017':'bostonglobe2017.csv',
    '2018':'bostonglobe2018.csv',
}

quoted = re.compile('"[^"]*"')


def tokenize(text, split_tokens=False):
    tokens = []
    for token in nltk.word_tokenize(text):
      if (token.isalnum() or (token.find('-') > 0)):
        tokens.append(token)
    if split_tokens:
      return tokens
    else:
      return " ".join(tokens)


def extract_quotes(text):
    """
        extract quotes in sentences from text file
    """
    text = re.sub(r"['\['\]]", "", text)
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
    return data_frames


if __name__ == '__main__':
   data_frames = process_files(data_file_name_dict)