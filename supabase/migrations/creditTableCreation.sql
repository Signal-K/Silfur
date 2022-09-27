CREATE TABLE credits (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES profiles (id),
    amount INTEGER DEFAULT 0,
    created_at TIMESTAMPZ DEFAULT NOW()
);

CREATE INDEX idx_credits_user_id ON credits (user_id);

/* Add ruby/rust application to view user stats */