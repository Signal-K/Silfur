from . import db

class Planet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50)) # planet name, up to 50 characters
    moons = db.Column(db.Integer) # number of moons the planet has, could expand to support secondary keys