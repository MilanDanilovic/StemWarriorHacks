$(document).ready(function() {
    $("#partner-section").hide();
    $("#donate-section").hide();
});

$("#donate-show").click(function(e) {
    $("#app-overlay").hide();
    $("#donate-section").animate({ width: 'toggle' }, 350);
});

$("#partner-show").click(function(e) {
    $("#app-overlay").hide();
    $("#partner-section").animate({ width: 'toggle' }, 350);
});

$("#go-back-donation").click(function(e) {
    $("#app-overlay").slideDown();
    $("#donate-section").animate({ width: 'toggle' }, 350);

});

$("#go-back-partner").click(function(e) {
    $("#app-overlay").slideDown();
    $("#partner-section").animate({ width: 'toggle' }, 350);

});