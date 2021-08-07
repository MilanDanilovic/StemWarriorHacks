$(document).ready(function() {
    $("#minimized").hide();
    $("#fire").hide();
    $("#water").hide();
    $("#air").hide();
});

$("#fire-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#water").fadeOut();
    $("#air").fadeOut();
    $("#fire").fadeIn();
    $("#minimized").fadeIn();
});

$("#water-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#fire").fadeOut();
    $("#air").fadeOut();
    $("#water").fadeIn();
    $("#minimized").fadeIn();
});

$("#air-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#water").fadeOut();
    $("#fire").fadeOut();
    $("#air").fadeIn();
    $("#minimized").fadeIn();
});

$("#back-to-overlay").click(function(e) {
    $("#app-overlay").fadeIn();
    $("#minimized").fadeOut();
    $("#fire").fadeOut();
    $("#air").fadeOut();
    $("#water").fadeOut();
});