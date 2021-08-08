var lat;
var lon;


$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        //alert('allow');
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log("Latitude " + lat + " ,Longitude " + lon);

    }, function() {
        //alert('deny');
    });
});