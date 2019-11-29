const weatherObject = new XMLHttpRequest ();
weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=c4f26b47558cfc6a6aebf07554d017ad&units=imperial", true);
weatherObject.send();
weatherObject.onload = function () {

	let weatherInfo = JSON.parse (weatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById("place").textContent = weatherInfo.name;
	document.getElementById("currentTemp").textContent = weatherInfo.main.temp;
	document.getElementById("humidity").textContent = weatherInfo.main.humidity;
	document.getElementById("windSpeed").textContent = weatherInfo.wind.speed;
	var descriptionp = weatherInfo.weather['0'].description;

	document.getElementById("description").textContent = descriptionp;
	console.log(descriptionp);

	function doinputoutput() {
    var a = parseFloat(document.getElementById('currentTemp').textContent);
    var b = parseFloat(document.getElementById('windSpeed').textContent);
  
    result = (35.74 + (0.6215 * a) - (35.75 * Math.pow(b, 0.16)) + (0.4275 * a * Math.pow(b, 0.16)));
  
    if (result <= 50 && b > 3) {
      document.getElementById('output').textContent = result.toFixed(0);
    } else {
      document.getElementById('output').textContent = "NA";
    }
  }
  doinputoutput();



}
