$(document).ready(function() {
    fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/10?limit=5").then(p => {
        p.json().then(data => {
            var stringHtmls = "";
            if (data.events.length !== 0) {




                data.events.forEach(element => {

                    stringHtmls += `  <tr class="text-center ">
                                                <td>${element.title}</td>
                                                <td>${element.geometries[0].date}</td>
                                                <td><a href="${element.link}" class="link-dark"><i class="fas fa-download"></i></a></td>
                                      </tr>`;


                });

                $("#most-recent").text(data.events[0].title + ", " + data.events[0].geometries[0].date);



                document.getElementById('recentThunderstorms').innerHTML = stringHtmls;
            } else {
                stringHtmls += `  <tr class="text-center ">
                                                <td>No data found</td>
                                                <td>No data found</td>
                                                <td><a href="#" class="link-dark">No data found</a></td>
                                      </tr>`;

                document.getElementById('recentThunderstorms').innerHTML = stringHtmls;
            }


        });
    });

    fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/15?limit=5").then(p => {
        p.json().then(data => {
            var stringHtmls = "";
            if (data.events.length !== 0) {




                data.events.forEach(element => {

                    stringHtmls += `  <tr class="text-center ">
                                                <td>${element.title}</td>
                                                <td>${element.geometries[0].date}</td>
                                                <td><a href="${element.link}" class="link-dark"><i class="fas fa-download"></i></a></td>
                                      </tr>`;


                });

                document.getElementById('glaciersIce').innerHTML = stringHtmls;
                document.getElementById('maps-3').innerHTML = `<iframe allowfullscreen frameborder="0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCRRvqrK4Kn79NkGUy6ljnEHzJfs-JUcRk&amp;center=${data.events[0].geometries[0].coordinates[0]}%2C${data.events[0].geometries[0].coordinates[1]}&amp;zoom=6" width="100%" height="400"></iframe>`
            } else {
                stringHtmls += `  <tr class="text-center ">
                                                <td>No data found</td>
                                                <td>No data found</td>
                                                <td><a href="#" class="link-dark">No data found</a></td>
                                      </tr>`;

                document.getElementById('glaciersIce').innerHTML = stringHtmls;
            }


        });
    });




});