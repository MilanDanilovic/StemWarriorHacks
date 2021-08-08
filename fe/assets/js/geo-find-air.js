var lat, lon;
const tokenValue = "feef59a2f5ba9aa411d6a792034405fb9fa5300d";

$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log("Latitude: " + lat + " , Longitude: " + lon);
        var currentValue = $("#aqi-input").text();
        var aqiIcon = $("#aqi-icon");
        var aqiInfo = $("#aqi-info");

        fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${tokenValue}`).then(p => {
            p.json().then(data => {
                console.log(data.data.aqi);
                var stringHtmls = "";

                let currentValue = document.getElementById('aqi-input').textContent = data.data.aqi;

                document.getElementById('aqi-more').textContent = data.data.forecast.daily.o3[0].avg + " ℃";
                console.log(data.data.attributions[0].name);
                stringHtmls += ` <div class="row"> <div class="col-sm" style="margin-top: 10px;"><span style="margin-top:25px">${data.data.attributions[0].name}</span></div></div>`;
                stringHtmls += ` <div class="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas>`;

                document.getElementById('maps-2').innerHTML = `<iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCRRvqrK4Kn79NkGUy6ljnEHzJfs-JUcRk&amp;center=${lat}%2C${lon}&amp;zoom=11" width="100%" height="400"></iframe>`;

                console.log(stringHtmls);
                document.getElementById('waterSources').innerHTML = stringHtmls;

                if (currentValue == 0) {
                    aqiIcon.addClass("far fa-meh-blank");
                    aqiIcon.addClass("text-primary");
                    aqiInfo.addClass("text-primary");
                    aqiInfo.text("No Info");
                } else if (currentValue < 51) {
                    aqiIcon.addClass("far fa-grin");
                    aqiIcon.addClass("text-success");
                    aqiInfo.addClass("text-success");
                    aqiInfo.text("Good Air");
                } else if (currentValue < 101) {
                    aqiIcon.addClass("far fa-smile");
                    aqiIcon.addClass("text-info");
                    aqiInfo.addClass("text-info");
                    aqiInfo.text("Moderate");
                } else if (currentValue < 151) {
                    aqiIcon.addClass("far fa-meh");
                    aqiIcon.addClass("text-warning");
                    aqiInfo.addClass("text-warning");
                    aqiInfo.text("Unhealthy");
                } else if (currentValue < 201) {
                    aqiIcon.addClass("far fa-frown");
                    aqiIcon.addClass("text-danger");
                    aqiInfo.addClass("text-danger");
                    aqiInfo.text("Very Unhealthy");
                } else {
                    aqiIcon.addClass("far fa-sad-cry");
                    aqiIcon.addClass("text-hazard");
                    aqiInfo.addClass("text-hazard");
                    aqiInfo.text("Hazardous");
                }
            });
        });

        fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?days=1").then(p => {
            p.json().then(data => {
                var stringHtmls = "";
                if (data.events.length !== 0) {
                    document.getElementById('di-input').innerHTML = data.events.length;
                    data.events.forEach(element => {
                        //document.getElementById('latestForrestFires').innerHTML=` <span>${element.title}</span>`;
                        stringHtmls += ` <div class="row"> <div class="col-sm" style="margin-top: 10px;"><span style="margin-top:25px">${element.title}</span></div></div>`;
                        console.log(element.title);

                    });
                    stringHtmls += ` <div class="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas>`;

                    document.getElementById('latestForrestFires').innerHTML = stringHtmls;
                    document.getElementById('maps-1').innerHTML = `<iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCRRvqrK4Kn79NkGUy6ljnEHzJfs-JUcRk&amp;center=${lat}%2C${lon}&amp;zoom=11" width="100%" height="400"></iframe>`;
                } else {
                    document.getElementById('di-input').innerHTML = 0;
                    stringHtmls += ` <span style="margin-top:25px">No Amber Fires Found</span>`;
                    stringHtmls += ` <div class="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}"></canvas>`;

                    document.getElementById('latestForrestFires').innerHTML = stringHtmls;
                    document.getElementById('maps-1').innerHTML = `<iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCRRvqrK4Kn79NkGUy6ljnEHzJfs-JUcRk&amp;center=${lat}%2C${lon}&amp;zoom=11" width="100%" height="400"></iframe>`;

                }


            });
        });

    }, function() {
        //alert('deny');
    });
});