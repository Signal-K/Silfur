from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config['SQALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    db.init_app(app)

    from .views import main
    app.register_blueprint(main) # for calling the endpoints

    return app