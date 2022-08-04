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