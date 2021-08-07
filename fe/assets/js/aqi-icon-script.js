$(document).ready(function() {

    var currentValue = $("#aqi-input").text();
    var aqiIcon = $("#aqi-icon");

    if (currentValue == 0) {
        aqiIcon.addClass("far fa-meh-blank")
    } else if (currentValue < 51) {
        aqiIcon.addClass("far fa-grin");
    } else if (currentValue < 101) {
        aqiIcon.addClass("far fa-smile");
    } else if (currentValue < 151) {
        aqiIcon.addClass("far fa-meh");
    } else if (currentValue < 201) {
        aqiIcon.addClass("far fa-frown");
    } else {
        aqiIcon.addClass("far fa-sad-cry");
    }

    //fa-2x text-gray-300

});