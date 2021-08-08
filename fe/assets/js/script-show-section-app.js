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
    $("#main-nav").fadeOut();
    $("#fire").fadeIn();
    $("#minimized").fadeIn();
});

$("#water-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#fire").fadeOut();
    $("#air").fadeOut();
    $("#main-nav").fadeOut();
    $("#water").fadeIn();
    $("#minimized").fadeIn();
});

$("#air-show").click(function(e) {
    $("#app-overlay").fadeOut();
    $("#water").fadeOut();
    $("#fire").fadeOut();
    $("#main-nav").fadeOut();
    $("#air").fadeIn();
    $("#minimized").fadeIn();
});

$("#back-to-overlay").click(function(e) {
    $("#minimized").fadeOut();
    $("#main-nav").fadeOut();
    $("#fire").fadeOut();
    $("#air").fadeOut();
    $("#water").fadeOut();
    $("#app-overlay").slideDown();
    $("#main-nav").fadeIn();
});