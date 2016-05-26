var Weather = require('./../js/Weather.js').Weather;

var apiKey = require('./../.env').apiKey;

//THIS IS JUST FRONT END... humidityData needs to be determined.
var displayHumidity = function(city, humidityData) {
  $('#results').append("The humidity in " + city + " is " + humidityData + "%");
}

var displayTemperature = function(temperatureData) {
  $('#results').append("<br>" + temperatureData);
}

var displayWindSpeed = function(windspeedData) {
  $('#results').append("<br>" + windspeedData);
}


$(document).ready(function() {

  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity, displayTemperature, displayWindSpeed);
  });
});
