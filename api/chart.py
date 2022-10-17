from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template("sample_page.html", chart_for_html=chart_from_python)