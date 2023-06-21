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

# Reward users for posts they've made
db.exec(<<~SQL)
    INSERT INTO silfur (user_id, amount)
    SELECT p.id, COUNT(posts.id)
    /* ... */
SQL