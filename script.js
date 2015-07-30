var fs = require('fs');

//import the json
var data = require('data/pxgh-b4sz.json');

//create an empty geojson featureCollection
var featureCollection = {
  type: 'FeatureCollection',
  features: []
}

//for each object in the data, create a geojson feature
data.forEach(function(d) {
  var shape = d.shape;

  //remove the shape, the remaining attributes will be the geojson properties
  delete d.shape;

  //nix the ones with no geometry
  if(shape.geometry.paths) {

    //create the geometry
    var g = {
      type: 'LineString',
      coordinates: shape.geometry.paths[0]
    }

    //create the feature, set properties and geometry
    var feature = {
      type: 'Feature',
      properties: d,
      geometry: g
    }

    //push to the featureCollection
    featureCollection.features.push(feature);
  } 
});

//write geojson to file
var outputFilename = 'data/output.geojson';

fs.writeFile(outputFilename, JSON.stringify(featureCollection, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("GeoJSON saved to " + outputFilename);
    }
}); 