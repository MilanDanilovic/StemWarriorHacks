var lat;
var lon;


$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        //alert('allow');
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        console.log("Latitude "+lat+" ,Longitude "+lon);

        
    


    }, function() {
        //alert('deny');
    });
});



            
// function initMap() {
//     const myLatLng = { lat: duz, lng: sir };
//     const map = new google.maps.Map(document.getElementById("mapaFamelijo"), {
//     zoom: 4,
//     center: myLatLng,
// });
//     new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
// });
// }



// function initMap() {
//     const myLatLng = { lat: duz, lng: sir };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: myLatLng,
//     });
//     new google.maps.Marker({
//       position: myLatLng,
//       map,
//       title: "Hello World!",
//     });
//   }






