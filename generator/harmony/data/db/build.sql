CREATE TABLE IF NOT EXISTS exp (
    UserId integer PRIMARY KEY,
    XP integer DEAFULT 0,
    Level integer DEFAULT 0,
    XPLock text DEFAULT CURRENT_TIMESTAMP
);