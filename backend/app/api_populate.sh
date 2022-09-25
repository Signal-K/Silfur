# Using httpie on python virtual environment -> Virtual environment should be activated from "Connection" directory first
http POST http://127.0.0.1:5000/api/db_populate

# Return all planets
http GET http://127.0.0.1:5000/api/planets

# Post new planet
echo '{"planet_id": "x", "name": "y", "moonNumber": "z"}' | http POST http://127.0.0.1:5000/api/planets
echo '{"planet_id": "3", "name": "Mercury", "moonNumber": "0"}' | http POST http://127.0.0.1:5000/api/planets # e.g.

# Delete a planet using its id
http DELETE http://127/0.0.1:5000/api/books/{$#}