$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        //alert('allow');
    }, function() {
        //alert('deny');
    });
});