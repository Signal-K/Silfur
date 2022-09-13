from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId
import json

app = Flask(__name__)

# Connect to mongodb -> MIGRATE mysql to mongodb
app.config["MONGO_URI"]='mongodb://localhost:27017/demo2' # Look into URI/ABI with eth/web3 wagmi(moralis) + flask
mongo = PyMongo(app)

CORS(app)
db = mongo.db.demo2

@app.route('/', methods=["GET", "POST"])
def getpost():
    return "something"

"""
@app.route('/', methods=["GET", "POST"])
def getpost():
    if request.method == "GET":
        o = []
        for i in db.find():
            o.append({ "_ID":str(ObjectId(i["_id"])), "name":i["name"], "email":i["email"],"password":i["password"]})
        return jsonify(o)
    elif request.method == "POST":
        db.insert({"name":request.json["name"],"email":request.json["email"],"password":request.json["password"]})

@app.route('/<id>', methods=["DELETE", "PUT"])
def deleteput(id):
    return id
"""