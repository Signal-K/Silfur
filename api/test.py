import requests

BASE = 'http://127.0.0.1:5000/'

# Original response (i.e. adding planets in the form of users):
#response = requests.get(BASE + 'helloworld/earth')

# New demo response -> videos
response = requests.put(BASE + "video/1", {"likes": 10, "name": "HelloWorld", "views": 100})
print(response.json())

input()
response = requests.get(BASE + "video/1", {"likes": 10})
print(response.json())