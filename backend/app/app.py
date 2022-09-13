from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"]='mongodb://localhost:27017' # Look into URI/ABI with eth/web3 wagmi(moralis) + flask