require "pg"

# Connect to the Supabase db
db = PG.connect(
    dbname: "",
    user: "",
    password: "",
    host: "",
    port: "",
    port: ""
)

# Create your currency table
db.exec(<<~SQL)
    CREATE TABLE silfur (
        id SERIAL PRIMARY KEY
        user_id UUID REFERENCES profiles(id),
        amount INTEGER DEFAULT 0
    );
SQL