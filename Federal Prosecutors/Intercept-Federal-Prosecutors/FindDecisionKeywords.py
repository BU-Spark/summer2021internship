import os
import re
import json
from google.cloud import storage
from dotenv import load_dotenv
import pandas as pd


# get list of misconduct words
def get_misconduct_words(file):
    with open(file) as f:
        keywords = json.load(f)
    return keywords


# gets decision text from gcs
def pull_text_from_gcs(circuit, decision):
    credentials = os.getenv("credentials")
    print(f"circuit: {circuit}, decision: {decision}")
    storage_client = storage.Client.from_service_account_json(credentials)
    blobs = storage_client.list_blobs("intercept", prefix=f"texts/{circuit}/{decision}/{decision}.txt")
    blob_list = [i for i in blobs]
    text = blob_list[0].download_as_string().decode("utf-8")
    text = text.lower() 
    return text


# takes in a decision txt file and misconduct keywords dictionary
# returns a total positive value based on the keywords found in text
def find_misconduct_matches(text, keywords):
    keyword_matches = {}
    for word in keywords:
        matches = re.finditer(word, text)
        matches = [match for match in matches]
        keyword_matches[word] = matches
    return keyword_matches
    
# break decision into paragraphs
def break_text(decision_text):
    return decision_text.splitlines()


# returns values based on whether misconduct words appear within certain number of words of another word and if they relate to plea agreements
def find_phrases(decision, plea_value):
    misconduct_value = 0

    phrase_value = 3
    pattern = re.compile(r"\b(?:prosecutor\W+(?:\w+\W+){0,6}?misconduct|misconduct\W+(?:\w+\W+){0,6}?prosecutor)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value

    # argue ___ erred
    phrase_value = 1
    pattern = re.compile(r"\b(?:argue\W+(?:\w+\W+){0,4}?erred|erred\W+(?:\w+\W+){0,4}?argue)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value

    # argued ___ erred
    phrase_value = 1
    pattern = re.compile(r"\b(?:argued\W+(?:\w+\W+){0,4}?erred|erred\W+(?:\w+\W+){0,4}?argued)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value

    # according to ___ improper
    phrase_value = 2
    pattern = re.compile(r"\b(?:according to\W+(?:\w+\W+){0,10}?improper|improper\W+(?:\w+\W+){0,10}?according to)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value

    # error was ___ harmless
    phrase_value = 3
    pattern = re.compile(r"\b(?:error was\W+(?:\w+\W+){0,8}?harmless|harmless\W+(?:\w+\W+){0,8}?error was)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value

    # "violated/breached ___ plea agreement"
    phrase_value = 3
    pattern = re.compile(r"\b(?:violated\W+(?:\w+\W+){0,8}?plea agreement|plea agreement\W+(?:\w+\W+){0,8}?violated)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    plea_value += len(matches) * phrase_value
    
    # breached ___ plea agreement
    phrase_value = 3
    pattern = re.compile(r"\b(?:breached\W+(?:\w+\W+){0,8}?plea agreement|plea agreement\W+(?:\w+\W+){0,8}?breached)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    plea_value += len(matches) * phrase_value

    # withdraw ___ guilty plea
    phrase_value = 2
    pattern = re.compile(r"\b(?:withdraw\W+(?:\w+\W+){0,8}?guilty plea|guilty plea\W+(?:\w+\W+){0,8}?withdraw)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    plea_value += len(matches) * phrase_value

    # enforcement ___ plea agreement
    phrase_value = 2
    pattern = re.compile(r"\b(?:enforcement\W+(?:\w+\W+){0,8}?plea agreement|plea agreement\W+(?:\w+\W+){0,8}?enforcement)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    plea_value += len(matches) * phrase_value

    # resentenced ___ a different judge
    phrase_value = 3
    pattern = re.compile(r"\b(?:resentenced\W+(?:\w+\W+){0,8}?a different judge|a different judge\W+(?:\w+\W+){0,8}?resentenced)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    plea_value += len(matches) * phrase_value


    # error wasn't/would have been/would be ___ harmless (-3)
    phrase_value = -3
    pattern = re.compile(r"\b(?:error wasn't\W+(?:\w+\W+){0,8}?harmless|harmless\W+(?:\w+\W+){0,8}?error wasn't)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value    

    # error would have been ___ harmless (-3)
    phrase_value = -3
    pattern = re.compile(r"\b(?:error would have been\W+(?:\w+\W+){0,8}?harmless|harmless\W+(?:\w+\W+){0,8}?error would have been)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value    

    # error would be ___ harmless (-3)
    phrase_value = -3
    pattern = re.compile(r"\b(?:error would be\W+(?:\w+\W+){0,8}?harmless|harmless\W+(?:\w+\W+){0,8}?error would be)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value    

    # no ___ misconduct (-3)
    phrase_value = -3
    pattern = re.compile(r"\b(?:no\W+(?:\w+\W+){0,6}?misconduct|misconduct\W+(?:\w+\W+){0,6}?no)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value   

    # no ___ evidence (-3)
    phrase_value = -3
    pattern = re.compile(r"\b(?:no\W+(?:\w+\W+){0,6}?evidence|evidence\W+(?:\w+\W+){0,6}?no)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value

    # no ___ merit (-3)
    phrase_value = -3
    pattern = re.compile(r"\b(?:no\W+(?:\w+\W+){0,6}?merit|merit\W+(?:\w+\W+){0,6}?no)\b", flags=re.IGNORECASE)
    matches = re.finditer(pattern, decision)
    matches = [match for match in matches]
    misconduct_value += len(matches) * phrase_value   

    return misconduct_value, plea_value


def generate_scores(x):
    circuit = x.Court
    decision = x.Case_ID

    # get example of decision
    decision_text = pull_text_from_gcs(circuit, decision)

    #decision_chunks = break_text(decision_text)
    
    # get misconduct value and plea value
    misconduct_matches = find_misconduct_matches(decision_text, misconduct_words)
    misconduct_value = 0
    plea_value = 0
    for keys in misconduct_matches:
        misconduct_value += misconduct_words[keys] * len(misconduct_matches[keys])
        if (keys == "resentenced before a different judge" or keys == "resentenced" or keys == "resentenced by a different judge"
            or keys == "specific enforcement" or keys == "remand" or keys == "the united states violated its agreement" or keys == "the government violated its agreement"):
            plea_value += misconduct_words[keys] * len(misconduct_matches[keys])
    print(misconduct_value)
    
    # get no misconduct value
    no_misconduct_matches = find_misconduct_matches(decision_text, no_misconduct_words)
    no_misconduct_value = 0
    for keys in no_misconduct_matches:
        no_misconduct_value += no_misconduct_words[keys] * len(no_misconduct_matches[keys])
    print(no_misconduct_value)

    # find specific phrases
    misconduct_phrase_val, plea_value = find_phrases(decision, plea_value)
    print(plea_value)

    # get total value
    total_value = misconduct_value + no_misconduct_value + misconduct_phrase_val
    print("Total Value:", total_value)

    print("Phrases Value:", misconduct_phrase_val)
    print()
    
    return pd.Series([total_value, misconduct_value, no_misconduct_value, plea_value])


if __name__ == "__main__":
    misconduct_words = get_misconduct_words('misconduct_words.json')
    no_misconduct_words = get_misconduct_words('no_misconduct.json')
    print('Misconduct Words:')
    print(misconduct_words)
    print('No Misconduct Words')
    print(no_misconduct_words)
    
    load_dotenv(override=True)

    df = pd.read_csv("newCasesWithMentions.csv")
    df[['Total_Score', "Misconduct_Score", "No_Misconduct_Score", "Plea_Agreement_Score"]] = df.apply(generate_scores, axis=1)
    df.to_csv("scores_added.csv", index=False)