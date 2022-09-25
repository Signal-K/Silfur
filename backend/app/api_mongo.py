from flask import Flask, make_response, request, jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__) # Merge this with the `/generator mysql db` in parent branch
database_name = "PlanetData"
DB_URI = "mongodb+srv://Mongo:Ii2V1vkMsq58o9YB@cluster0.lzuxpat.mongodb.net/?retryWrites=true&w=majority"
app.config["MONGODB_HOST"] = DB_URI
"""DB_URI = "mongodb+srv://G1zmotronn:{}@cluster0.lzuxpat.mongodb.net/{}>retryWrites=true&w=majority".format(
    password, database_name
) # connection string to mongodb"""

db = MongoEngine()
db.init_app(app)

class Planet(db.Document):
    planet_id = db.IntField()
    name = db.StringField()
    moonNumber = db.IntField()

    def to_json(self): # convert the specified planet into a json class
        return {
            "planet_id": self.planet_id,
            "name": self.name,
            "moonNumber": self.moonNumber,
        }

# API Endpoints
@app.route('/api/db_populate', methods=['POST'])
def db_populate():
    planet1 = Planet(planet_id=1,
        name="Earth",
        moonNumber=1)
    planet2 = Planet(planet_id=2,
        name="Mars",
        moonNumber=2)
    planet1.save()
    planet2.save()
    return make_response("", 201)

@app.route('/api/planets', methods=["GET", "POST"])
def api_planets():
    if request.method == "GET":
        planets = []
        for planet in Planet.objects:
            planets.append(planet)
        return make_response(jsonify(planets), 200)
    elif request.method == "POST":
        content = request.json
        planet = Planet(planet_id=content['planet_id'], name=content['name'], moonNumber=content['moonNumber'])
        planet.save()
        return make_response("", 201)

@app.route('/api/planets/<planet_id>', methods=["GET", "PUT", "DELETE"])
def api_each_planet(planet_id):
    if request.method == "GET":
        planet_obj = Planet.objects(planet_id=planet_id).first()
        if planet_obj:
            return make_response(jsonify(planet_obj.to_json()), 200)
        else:
            return make_response("", 404)
    elif request.method == "PUT":
        content = request.json
        planet_obj = Planet.objects(planet_id=planet_id).first()
        planet_obj.update(moonNumber=content['moonNumber'], name=content['name'])
        return make_response("", 204)
    elif request.method == "DELETE":
        planet_obj = Planet.objects(planet_id=planet_id).first()
        planet_obj.delete()
        return make_response("", 204)

if __name__ == '__main__':
    app.run()

# mongo username: G1zmotronn
# mongo pw: 7eyKlkQ48nYwA80w // Ii2V1vkMsq58o9YB

"""Sample request body
{
    "planet_id": 1,
    "name": "Earth",
    "moonNumber": 1,
}
"""

"""HTTP Methods info:
1. POST: /api/db_populate -> Populates the db | Returns 201 success code with empty response body
2. GET: /api/planets -> Return the details of all planets in the DB | Returns 200 success code
3. POST: /api/planets -> Create a new planet | Return 201 success code with empty response body
4. GET: /api/planets/$# -> Returns the details of planet "#" | 200 success code unless planet not found (this results in a 404 error code response)
5. PUT: /api/planets/$# -> Update the details of planet "#" | 204 success code
6. DELETE: /api/planets/$# -> Deletes planet "#" | 204 success code
"""