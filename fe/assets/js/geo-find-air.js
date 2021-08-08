
var lat, lon;
const tokenValue= "feef59a2f5ba9aa411d6a792034405fb9fa5300d";

$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        console.log("Latitude: "+lat+" , Longitude: "+lon);

        fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${tokenValue}`).then(p =>{
            p.json().then(data =>{
                console.log(data.data.aqi);
                document.getElementById('aqi-input').innerHTML=data.data.aqi;
            });
        });
    }, function() {
        //alert('deny');
    });
});