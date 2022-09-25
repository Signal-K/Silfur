
# PanopteSK / Planets
Documentation relating to the planets database & content on the server and API

# Data
## Attributes
* Distance from parent star
* Planet name
* Moons + moon attributes (copy of planet attributes, but with `planet` replacing `star` in 'parent star')
* Temperature
* Type (Rocky, water, gas, ice)
* Diameter/Radius
* Mass
* Atmosphere/composition

## Data sources
Just like the other citizen science projects, this data is gathered from public data like the Kepler Space Telescope's records, as well as Zooniverse/Panoptes

# API Requests
These endpoints are using the port `5000` as an example

## Get
Get every planet: <!--Update these links to match/connect with the rest of the docs and platform -->
```bash
curl http://api.skinetics.tech:5000/planets
```

## Create
Create a single planet:
```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "planetName": "",
    "planetMoons":  
}' http://api.skinetics.tech:5000/planets
```

# MongoDB Processes
```py
# Create a new planet process
print("\nCreate a Planet")
planet = Planet(planet_id=1,
name = "Earth",
moonNumber = 1
)
planet.save() # Commit an item to MongoDB

# Fetching existing data
print("\nFetch a planet")
planet = Planet.objects(planet_id=1).first() # Return a single document that matches the query
print(planet.to_json())

# Update a planet/data
print("\n Update a planet")
planet.update(name="Mars",
moonNumber = 2)
print(planet.to_json())

# Add another planet
print("\nAdd another planet")
planet = Planet(planet_id=2,
name="Earth",
moonNumber = 1
)
planet.save()

# Fetch all planets from the database
print("\n Fetch all planets")
planets = [] # list
for planet in Planet.objects():
    planets.append(planet.to_json())
print(planets)

# Fetch planets from a query
print("\nFind planets whose name contains 'm'")
planets = []
for planet in Planet.objects(name__contains='m'):
    planets.append(planet.to_json())
print(planets)

# Query how many planets are in the collection
print("\nHow many planets are in this db?")
print(Planet.objects.count())

# Order the planets by planet name (alphabetical order)
print("\nOrder by planet name")
planets = []
for planet in Planet.objects().order_by('name'):
    planets.append(planet.to_json())
print(planets)

# Process to delete a planet by ID from the db
print("\nDelete a planet")
planet = Planet.objects(planet_id=2).first()
planet.delete()
print(Planet.objects.count())

# Delete all planets in the collection
print("\nDelete all the planets in this collection")
for planet in Planet.objects():
    planet.delete()
print(Planet.objects.count())
```