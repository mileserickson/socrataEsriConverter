# socrataEsriConverter
Converts SODA API output from Socrata ESRI-connected datasets into a geojson featureCollection

## Why
I came across this [dataset of Seattle Sidewalks](https://data.seattle.gov/Transportation/SDOT-Sidewalks/pxgh-b4sz) on data.seattle.gov.
It's an "ESRI-connected dataset", so it is being fed by an ArcGIS server somewhere.  It's a map view, but ironically the data cannot be exported in geospatial format.  It's pretty much useless.

This script takes the JSON output from this dataset's SODA API endpoint and converts it to geoJSON.

### How to use

Download the full JSON for the dataset using https://data.seattle.gov/resource/pxgh-b4sz.json?$LIMIT=50000 (if you don't use the $Limit, it will only return the first 1000 rows)
Save this file as `data/pxgh-b4sz.json`.

Install Dependencies `npm install`
Run it `node script.js`

`data/output.geojson` will appear.  Use it.  Woot woot.


Here's what it looks like after import to CartoDB ([View map on CartoDB](https://cwhong.cartodb.com/viz/b459d044-366a-11e5-a13c-0e49835281d6/public_map)):
![seattle_sidewalks](https://cloud.githubusercontent.com/assets/1833820/8975511/a64052d4-364d-11e5-871d-f0094d97865d.png)
