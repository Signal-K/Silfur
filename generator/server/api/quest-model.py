from . import db
import requests

lootLockerServerKey = "hello"

# I'm going to start working on the quest API & figure out the data structure we're going to use for everything
class Quest(db.Model):
    id = db.Column(db.Integer, primary_key=True)