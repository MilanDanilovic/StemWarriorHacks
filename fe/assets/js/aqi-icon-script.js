$(document).ready(function() {

    var currentValue = $("#aqi-input").text();
    var aqiIcon = $("#aqi-icon");
    var aqiInfo = $("#aqi-info");

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

    //fa-2x text-gray-300

});