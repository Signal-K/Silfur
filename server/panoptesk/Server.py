from crypt import methods
from flask import Flask, jsonify, request
app = Flask(__name__)

planets = [
    { 'planetName': 'Mars', 'planetMoons': 2 } # retrieve these from other apis like panoptes/moralis
]

@app.route('/planets')
def get_planets():
    return jsonify(planets)

@app.route('/planets', methods=["POST"])
def add_planet():
    planets.append(request.get_json())
    return '', 204