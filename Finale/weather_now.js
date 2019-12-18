var temple = document.getElementById("Las Vegas").textContent;
if (temple.includes("Las Vegas")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=5475433&&temp&units=imperial&APPID=210c6be8650140bd61b5b896bccb52f1";
}
var temple = document.getElementById("Cedar").textContent;
if (temple.includes("Cedar")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=5536630&temp&units=imperial&APPID=210c6be8650140bd61b5b896bccb52f1";
}

else if (temple.includes("Salt Lake City")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=5780993&&temp&units=imperial&APPID=210c6be8650140bd61b5b896bccb52f1";
}
else if (temple.includes("Hong Kong")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=1819729&temp&units=imperial&APPID=210c6be8650140bd61b5b896bccb52f1";
}
else {
  if  (temple.includes("Reno")) 
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=5511077&temp&units=imperial&APPID=210c6be8650140bd61b5b896bccb52f1";
}
*/


var weatherObject = new XMLHttpRequest();
weatherObject.open ("GET",weatherapi, true );
weatherObject.send();
weatherObject.onload = function() {
  let weatherInfo = JSON.parse(weatherObject.responseText);
  console.log(weatherInfo);

  document.getElementById('currentCondition').innerHTML = weatherInfo.weather[0].main;
  document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
  document.getElementById('humidity').innerHTML= weatherInfo.main.humidity;
  document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
 
  function calcWindChill() {
    var temp = parseFloat(document.getElementById('currentTemp').textContent);
    var speed = parseFloat(document.getElementById('windSpeed').textContent);
  
    windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
  
    if (windchill <= 50 && speed > 3) {
      document.getElementById('wChill').textContent = windchill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById('wChill').textContent = "NA";
    }
  }
  calcWindChill();

} // end of onload

