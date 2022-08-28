from flask import Blueprint, jsonify

main = Blueprint('main', __name__)

@main.route('/add_planet', methods=['POST'])
def add_planet():
    return 'Done', 201

@main.route('/planets')
def planets():
    planets = []
    return jsonify({'planets' : planets})