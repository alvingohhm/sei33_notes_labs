# first you need to import the requests module

import requests

# pip install requests

# response = requests.get("my_API_URL_HERE")

# print(response)

# Data on the web is usually transferred in JSON or XML
# We can "decode" the data with the following methods

response = requests.get("http://api.open-notify.org/astros.json")
# this gets the list of astronauts at the ISS currently

# print(response)
# this API returns data using json
print(response.json())

# data_to_be_used = response.json()
#
# print(data_to_be_used)

# for item in data_to_be_used:
#     print(item)
#
# for item in data_to_be_used["people"]:
#     print(item["name"])
#
# for item in data_to_be_used["people"]:
#     print(item["craft"])
