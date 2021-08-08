$(document).ready(function() {

    var currentValue = $("#aqi-input").text();
    var aqiIcon = $("#aqi-icon");
    var aqiInfo = $("#aqi-info");

    if (currentValue == 0) {
        aqiIcon.addClass("far fa-meh-blank")
        aqiInfo.text("Good Air");
    } else if (currentValue < 51) {
        aqiIcon.addClass("far fa-grin");
        aqiInfo.text("Moderate");
    } else if (currentValue < 101) {
        aqiIcon.addClass("far fa-smile");
        aqiInfo.text("Unhealthy for Sensitive Groups");
    } else if (currentValue < 151) {
        aqiIcon.addClass("far fa-meh");
        aqiInfo.text("Unhealthy");
    } else if (currentValue < 201) {
        aqiIcon.addClass("far fa-frown");
        aqiInfo.text("Very Unhealthy");
    } else {
        aqiIcon.addClass("far fa-sad-cry");
        aqiInfo.text("Good Air");
    }

    //fa-2x text-gray-300

});