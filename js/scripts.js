// this is my mapboxGL token
// the base style includes data provided by mapbox, this links the requests to my account
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hydXRpMjE1IiwiYSI6ImNrNnY2N25yNTBoaW8zcnFjZDQzdHhuM3EifQ.xnsb1oYf6RBoyK_0iB7bpw';

// we want to return to this point and zoom level after the user interacts
// with the map, so store them in variables
var initialCenterPoint = [-101.100790,39.064944]
var initialZoom = 6


// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/streets-v11', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// iterate over each object in studentData
cnndata.forEach(function(foodEntry) {
  // for each object in the studentData, add a marker to the map with a popup
  new mapboxgl.Marker()
    .setLngLat([foodEntry.longitude, foodEntry.latitude])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
     .setHTML(`${foodEntry.name} goes to ${foodEntry.food_item} from ${foodEntry.country}🏆.`))
    .addTo(map);
})

// event listeners for the fly to buttons

$('#Thailand').on('click', function() {
  map.flyTo({
    center: [101.167541,14.898107],
    zoom: initialZoom
  })
})

$('#Italy').on('click', function() {
  map.flyTo({
    center: [12.485342,42.803571],
    zoom: initialZoom
  })
})

$('#Japan').on('click', function() {
  map.flyTo({
    center: [138.517340,36.144392],
    zoom: initialZoom
  })
})

$('#China').on('click', function()  {
  map.flyTo({
    center: [104.251660,34.052432],
    zoom: initialZoom
  })
})

$('#Mexico').on('click', function() {
  map.flyTo({
    center: [-102.506153,23.616165],
    zoom: initialZoom
  })
})

$('#Germany').on('click', function() {
  map.flyTo({
    center: [10.307977,50.951708],
    zoom: initialZoom
  })
})

$('#Indonesia').on('click', function() {
  map.flyTo({
    center: [121.911994,-3.856122],
    zoom: initialZoom
  })
})

$('#Malaysia').on('click', function() {
  map.flyTo({
    center: [101.965966,3.497335],
    zoom: initialZoom
  })
})

$('#Mozambique').on('click', function() {
  map.flyTo({
    center: [35.341175,-17.554260],
    zoom: initialZoom
  })
})

$('#Portugal').on('click', function(){
  map.flyTo({
    center: [18.691907,39.636541],
    zoom: initialZoom
  })
})

$('#Poland').on('click', function() {
  map.flyTo({
    center: [18.691907,52.514951],
    zoom: initialZoom
  })
})

$('#SouthAfrica').on('click', function() {
  map.flyTo({
    center: [23.982869,-30.985880],
    zoom: initialZoom
  })
})

$('#France').on('click', function() {
  map.flyTo({
    center: [2.377590,46.604845],
    zoom: initialZoom
  })
})

$('#Gabon').on('click', function() {
  map.flyTo({
    center: [11.717760,-0.697840],
    zoom: initialZoom
  })
})


$('#UnitedStates').on('click', function() {
  map.flyTo({
    center: [-101.100790,39.064944],
    zoom: initialZoom
  })
})
