from urllib import response
import requests

BASE = "http://127.0.0.1:5000/"

data = [{"likes": 10, "name": "Video1", "views": 1000},
    {"likes": 18, "name": "Video2", "views": 10200},
    {"likes": 25, "name": "Video3", "views": 105400}]

for i in range(len(data)):
    response = requests.put(BASE + "video/" + str(i), data[i])
    print(response.json()) # Send request with test info

input()
response = requests.delete(BASE + "video/0") # Attempt to delete the first video as a test
print(response)
input()
response = requests.get(BASE + "video/2")
print(response.json())