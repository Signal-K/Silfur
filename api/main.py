from flask import Flask, request
#from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' # location of the database -> see `database.db` in root directory (inside `./api` in signal-k/polygon)
db = SQLAlchemy(app) # Wrap the database around the flask app

# Database models
class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    views = db.Column(db.Integer, nullable = False)
    likes = db.Columnn(db.Integer, nullable = False)

    def __repr__(self):
        return f"Video(name = {name}, views = {views}, likes = {likes})"

db.create_all() # Create the database model

""" # Data (Planet names e.g.) 
names = {"Earth": {"Moons": 1, "Type": "Terrestrial"},
"Mars": {"Moons": 2, "Type": "Terrestrial"}} # Update with TIC Ids """

# User classification videos
video_put_args = reqparse.RequestParser()
video_put_args.add_argument("name", type=str, help="Name of the video", required = True)
video_put_args.add_argument("views", type=int, help="Views of the video", required = True) # Change this later to be "matches" (i.e. if someone has classified or added the same dataset)
video_put_args.add_argument("likes", type=int, help="Likes on the video", required = True) # Change this later to be a rating (two-tiered approach like on RottenTomatoes)

videos = {}

# Error handling for video endpoints
def abort_if_video_id_doesnt_exist(video_id):
    if video_id not in videos:
        abort(404,  message = "Video id is not valid.")

def abort_if_video_exists(video_id):
    if video_id in videos:
        abort(409, message = "This video id already exists.")

class Video(Resource):
    def get(self, video_id):
        abort_if_video_id_doesnt_exist(video_id)
        return videos[video_id]

    def put(self, video_id): # Create a new video using this API request
        abort_if_video_exists(video_id)
        args = video_put_args.parse_args()
        # print(request.form) # Information relating to the data "put" to this api endpoint
        videos[video_id]: args
        return videos[video_id], 201

    def delete(self, video_id): 
        abort_if_video_id_doesnt_exist(video_id)
        del videos[video_id]
        return '', 204

api.add_resource(Video, "/video/<int:video_id>")

if __name__ == '__main__':
    app.run(debug = True)