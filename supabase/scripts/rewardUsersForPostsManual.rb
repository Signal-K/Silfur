require 'pg'

db = PG.connect(
    dbname: "",
    user: "",
    password: "",
    host: "",
    port: "",
)

db.exec(<<~SQL)
    WITH user_posts AS (
        SELECT author, COUNT(*) as post_count
        FROM posts_duplicate
        GROUP BY author
    )
    UPDATE credits
    SET amount = credits.amount + (3 * user_posts.post_count)
    FROM user_posts
    WHERE credits.user_id = user_posts.author;
SQL