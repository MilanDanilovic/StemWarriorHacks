var lat;
var lon;


$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        //alert('allow');
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        console.log("Latitude "+lat+" ,Longitude "+lon);

        
    fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?days=1").then(p => {
        p.json().then(data => {
            var stringHtml="";
           data.events.forEach(element => {
               //document.getElementById('latestForrestFires').innerHTML=` <span>${element.title}</span>`;
               stringHtml+=` <span style="margin-top:25px">${element.title}</span>`;
               console.log(element.title);
           });
           stringHtml+=` <div class="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas>`;

            document.getElementById('latestForrestFires').innerHTML=stringHtml;
            document.getElementById('mapaFamelijo').innerHTML=`<iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCRRvqrK4Kn79NkGUy6ljnEHzJfs-JUcRk&amp;center=${lat}%2C${lon}&amp;zoom=11" loading="lazy" width="100%" height="400"></iframe>`;
            });
        });


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


