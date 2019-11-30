var city = document.getElementById("currentCity").textContent;
if (city.includes("Preston")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
  var forecastapi = "//api.openweathermap.org/data/2.5/forecast?id=5604473&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}
else if (city.includes("Soda Springs")) {
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?id=5678757&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
  var forecastapi = "//api.openweathermap.org/data/2.5/forecast?id=5678757&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

else {
  if  (city.includes("Fish Haven")) 
  var weatherapi = "//api.openweathermap.org/data/2.5/weather?zip=83287,us&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
  var forecastapi = "//api.openweathermap.org/data/2.5/forecast?zip=83287,us&temp&units=imperial&APPID=35288c8a9bf8fbe38d102b914f4bd7b1";
}

const weatherObject = new XMLHttpRequest();
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



const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const forecastObject = new XMLHttpRequest();
forecastObject.open ("GET",forecastapi, true );
forecastObject.send();
forecastObject.onload = function() {
  let forecastInfo = JSON.parse(forecastObject.responseText);
  //console.log(forecastInfo);

  var forecastItems = forecastInfo.list;
  var fiveDayItems = forecastItems.filter(function (item) {
    return item.dt_txt.includes("18:00:00");
  });
  
  for (let i = 0; i < (fiveDayItems.length); ++i) {
    var day = "day" + (i+1);
    var icon = "icon" + (i+1);
    var temp = "temp" + (i+1);
  
    var d = new Date(fiveDayItems[i].dt_txt);
    var dayName = days[d.getDay()];
  
    var imagesrc = '//openweathermap.org/img/w/' + fiveDayItems[i].weather[0].icon + '.png';
    var desc = '//openweathermap.org/img/w/' + fiveDayItems[i].weather[0].description;
    document.getElementById(day).textContent = dayName;
    document.getElementById(icon).setAttribute('src', imagesrc);
    document.getElementById(icon).setAttribute('alt', desc);
    document.getElementById(temp).textContent = fiveDayItems[i].main.temp.toFixed(0);
  } 

}// end of onload
