import requests

response = requests.get("http://api.open-notify.org/astros.json")

data_to_be_used = response.json()

print(data_to_be_used)
