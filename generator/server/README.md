Enter the python virtual environment inside `/api` and run `flask run`

```py
from api.models import Planet
from api import db, create_app
db.create_all(app=create_app())
```

To-Dos:
* Integrate the flask-sqlalchemy database into Moralis