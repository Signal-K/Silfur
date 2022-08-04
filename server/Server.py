from flask import Flask
app = Flask(__name__)
import Server

@app.route("/")
def helloworld():
    return Server.planets