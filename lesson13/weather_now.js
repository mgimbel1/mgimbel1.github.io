const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","https//:api.openweathermap.org/data/2.5/weather?zip=89015,us&appid="d61614243d9f7996c960f9fa75489843&units=imperial",true);
weatherObject.send();
weatherObject.onload = function () {
let weatherinfo = JSON.parse (weatherObject.responsetext);
console.log (weatherinfo);
}
document.getElementBYId('place').innterHTML = weatherinfo.name;
document.getElementBYId('currentTemp').innterHTML = weatherinfo.name.main.temp;
document.getElementBYId('WindSpeed').innterHTML = weatherinfo.name.;wind.speed;
//end of onload
