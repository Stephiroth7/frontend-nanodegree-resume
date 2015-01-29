/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name" class="pink text-center col-md-12">%data%</h1>';
var HTMLheaderRole = '<h3 class="pink text-center col-md-12">%data%</h3><hr/>';





var HTMLcontactGeneric = '<li class="flex-item"><span class="green">%contact%</span><span class="white">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="blue">mobile</span><span class="white">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="blue">email</span><span class="white">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="blue">twitter</span><span class="white">%data%</span></li>';
var HTMLgithub = '<li class="flex-item "><span class="blue">github</span><span class="white">%data%</span></li>';
var HTMLblog = '<li class="flex-item "><span class="blue">blog</span><span class="white">%data%</span></li>';
var HTMLlocation = '<li class="flex-item "><span class="blue">location:</span><span class="white">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive col-md-3">';
var HTMLWelcomeMsg = '<h2 class="welcome-message orange">%data%</h2>';

var HTMLskillsStart = '<h3 id="skillsH3" class="blue col-md-9">Skills at a Glance:</h3><ul id="skills" class="flex-box col-md-9"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white">%data%</span></li>';
var HTMLhobbiesStart = '<h3 id="hobbiesH3" class="blue col-md-9">Hobbies:</h3><ul id="hobbies" class="flex-box col-md-9"></ul>';
var HTMLhobbies = '<li class="flex-item"><span class="white">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="orange" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry col-md-4"></div>';
var HTMLprojectTitle = '<a class="green project-title" href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="project-desc"><br>%data%</p>';
var HTMLprojectImage = '<img class="project-img" src="%data%">';

var HTMLschoolStart = '<div class="education-entry col-md-6"></div>';
var HTMLschoolName = '<a class="pink" href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<p><br>Major: %data%</p>';

var HTMLonlineClasses = '<!--<h2 class="orange">Digital</h2>-->';
var HTMLonlineTitle = '<a class="pink" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$("").click()



/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(name) || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) { //THIS IS AN ANONYMOUS FUNCTION!!
  // your code goes here!
  
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };
//added by sfloyd to make map 100% desaturated
var mapStyles = [
  {
    stylers: [
      { saturation: 0 }
      
    ]
  }
];


  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);
  //call to setOptions() with style array to desaturate map
map.setOptions({styles: mapStyles}); //what this does: set a property of the map called styles to the variable declared called mapStyles

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    //locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    // for (var school in education.schools) {
    //   locations.push(education.schools[school].location);
    // }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    //return console.log(locations);
    return locations;
  }

  function nameFinder(){
    var names = [];
    for (var job in work.jobs) {
      names.push(work.jobs[job].employer);
    }
    return names;
  }
  //console.log( nameFinder() );

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')

    // infoWindows and infoBubbles are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: '<div class="black">' + name + '</div>'
      //name comes from the name variable declared above: it's the formatted address.
      //and wrapped in a div to make the text black.
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }



  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
   map.fitBounds(mapBounds);
  });
