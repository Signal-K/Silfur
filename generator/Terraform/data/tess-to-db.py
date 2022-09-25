import lightkurve as lk
import mongoengine as db
from pymongo import MongoClient
from mongodb_quickstart import Planet # from tess-finder import 

database_name = "planetData"
password = "7eyKlkQ48nYwA80w"
DB_URI = "mongodb+srv://Mongo:Ii2V1vkMsq58o9YB@cluster0.lzuxpat.mongodb.net/?retryWrites=true&w=majority" # Move back to below function later, currently this is sending to an empty/test table
"""DB_URI = "mongodb+srv://G1zmotronn:{}@cluster0.lzuxpat.mongodb.net/{}>retryWrites=true&w=majority".format(
    password, database_name
) # connection string to mongodb"""
db.connect(host=DB_URI)

# Provide call to collection class (line 4)

# Star Class
class Star(db.Document):
    star_id = db.IntField()
    starName = db.StringField()
    author = db.StringField() # Default = Kepler or TESS
    cadence = db.StringField() # Default = long
    quarter = db.IntField() # Default = 4
    frame = db.IntField()

    def to_json(self): # Show JSON Output for class
        return {
            "star_id": self.star_id,
            "starName": self.starName,
            "author": self.author,
            "cadence": self.cadence,
            "quarter": self.quarter,
            "frame": self.frame,
        }

# Create a new star (and pass it into tess-finder)
star = Star(star_id=1,
starName = "KIC 6922244",
author = "KEPLER",
cadence = "long",
quarter = 4,
frame = 42
)
star.save()