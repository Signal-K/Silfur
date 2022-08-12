from flask import Flask, render_template
import request
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

# Retrieve info from an API (request can be entered via input or from frontend form)
@app.route('/get', methods=['GET'])
def get():
    req = request.get('https://cat-fact.herokuapp.com/facts')
    data = json.loads(req.content)
    return render_template('api-request-data-card.html', data=data['all'])

# Moralis/star sailors signin + space traders
@app.route("/signin", methods=['POST'])
def signin():
    return json.dumps({ 'username' : request.form['username'] })