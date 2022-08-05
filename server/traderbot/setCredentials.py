from SpacePyTraders import client

USERNAME = "YOUR USERNAME"
TOKEN = "YOUR TOKEN"

api = client.Api(USERNAME, TOKEN)
print(api.account.info())