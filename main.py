from flask import Flask, redirect, render_template, request, url_for, session, flash
from datetime import timedelta
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'hello' # Session data encryption
# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3' # users table
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False # just there to remove error/debug msg in logs
db = SQLAlchemy(app)
# Mongo = 
app.permanent_session_lifetime = timedelta(days = 1) # user session lasts for 1 day | Only applies to permanent session data

# User object model
class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __init__(self, name, email): # Initialise new variables | These values are required for each object
        self.name = name
        self.email = email

# API Routes
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        session.permanent = True # Add a function for the user to toggle this on or off
        user = request.form["nm"]
        session["user"] = user

        found_user = users.query_by(name = user).first() # Find all users that match the user that logged in
        if found_user:
            session["email"] = found_user.email
        else:
            usr = users(user, "")
            db.session.add(usr) # Add the user to db
            db.session.commit()

        flash("You have successfully been logged in")
        return redirect(url_for("user"))
    else:
        if "user" in session: # If the user is already authenticated and tries to visit /login
            flash("Already logged in")
            return redirect(url_for("user"))
        else:
            flash("You have not logged in yet!")
            return render_template("/auth/login.html")

@app.route("/user", methods={"POST", "GET"})
def user():
    email = None
    if "user" in session:
        user = session["user"]

        if request.method == 'POST':
            email = request.form['email']
            session['email'] = email

            found_user = users.query.filter_by(name = user).first()
            found_user.email = email
            db.session.commit()
            flash("Email was saved")
        else:
            if "email" in session:
                email = session['email']

        return render_template("/auth/user.html", email = email)
    else:
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    flash("You have been logged out!", "info")
    session.pop("user", None)
    session.pop("email", None)
    
    return redirect(url_for("login"))

if __name__ == "__main__":
    #db.create_all() -> Currently causing errors, let's try and debug this
    app.run(debug=True)