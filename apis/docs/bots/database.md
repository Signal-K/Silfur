This database holds information relating to the user's discord account. Users can connect their Discord account to things like their Wallet, the api, and other games

Right now this database is standalone, inside `generator/harmony/data/db/`, however eventually we will create new tables inside the `/server` directory, as well as on Moralis. 

> Harmony refers to the antonym of discord

Ideally, all our databases will be accessible via React/JS & Python.

Contains:
* User interactions with the discord bot
    E.g. `UserId`, `XP`

Commands (like to the spacetraders api) will be referenced by the Discord bot and passed on to the api, however these will not be stored in the bot's database. The commands, however, will still provide exp and Discord also stores all the messages, including commands, inside its own database

## Tech stack
The database is currently using SQLite. I'm not really too familiar with databases, I guess as long as it's lightweight (but has the features we require) and can send and receive requests from the other APIs, it will do the job.