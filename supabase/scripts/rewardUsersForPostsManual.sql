WITH user_posts AS (
    SELECT author, COUNT(*) as post_count
    FROM posts_duplicate
    GROUP BY author
)
UPDATE credits
SET amount = credits.amount + (3 * user_posts.post_count)
WHERE user_id IN (SELECT author FROM user_posts);