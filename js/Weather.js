var apiKey = require('./../.env').apiKey;

exports.Weather = function(){
}

exports.Weather.prototype.getWeather = function(city, displayFunction, temperatureFunction, windSpeedFunction) {
  console.log(apiKey);
  console.log(city);
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
  displayFunction(city, response.main.humidity);
  temperatureFunction(response.main.temp);
  windSpeedFunction(response.wind.speed);
   return response.main.humidity;
   return response.main.temp;
   return response.wind.speed;
 }).fail(function(error) {
   $('#results').text(error.responseJSON.message);
 });
}
