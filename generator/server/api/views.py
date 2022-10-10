from flask import Blueprint, jsonify, request
from . import db
from .models import Planet

main = Blueprint('main', __name__)

@main.route('/add_planet', methods=['POST'])
def add_planet():
    planet_data = request.get_json() # post request data is sent into the planet data object, and is then added to the planet array
    new_planet = Planet(planetName=planet_data['planetName'], moons=planet_data['moons'])
    db.session.add(new_planet) # database saving commands
    db.session.commit()

    return 'Done', 201

@main.route('/planets')
def planets():
    planet_list = Planet.query.all() # get all of the planets that exist in the db
    planets = []

    for planet in planet_list:
        planets.append({'planetName' : planet.planetName, 'moons' : planet.moons})

    return jsonify({'planets' : planets})