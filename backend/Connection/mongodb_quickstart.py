import mongoengine as db

database_name = "planetData"
password = ""
DB_URI = "mongodb+srv://G1zmotronn:{}@cluster0.lzuxpat.mongodb.net/{}>retryWrites=true&w=majority".format(
    password, database_name
) # connection string to mongodb
db.connect(DB_URI)