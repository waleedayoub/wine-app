import requests
import json
import datetime
import csv
from bs4 import BeautifulSoup
from lxml import html
import pandas as pd

response = requests.get("https://www.lcbo.com/en/amlocator/index/ajax/?p=1")
# print(response.text)

soup = BeautifulSoup(response.text, 'html.parser')
for title in soup.find_all("div", {"class": "\"amlocator-link-store-details\""}):
     print(title.string)
# print(soup.body)