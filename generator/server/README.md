Enter the python virtual environment inside `/api` and run `flask run`
All commands will be > Inside `generator/server` unless otherwise specified

```py
from api.models import Planet
from api import db, create_app
db.create_all(app=create_app())
```

```bash
pipenv shell
export FLASK_APP=api
```

## Database Setup
Using `sqlite` (on my install the command is `sqlite3`):
> Inside `generator/server`
```bash
sqlite3 api/database.db
```

To-Dos:
* Integrate the flask-sqlalchemy database into Moralis
* Attach to the Panoptes/Zooniverse API so that data can be sent from your Zooniverse account into the db
* Retrieve data points (and graphs) inside Unity