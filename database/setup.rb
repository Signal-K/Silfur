require 'pg'

# Connect to PostgreSQL server
connection = PG.connect(dbname: 'postgres')

# Create the db
connection.exec('CREATE DATABASE silfur_sailors_db')

# Close connection to db
connection.close