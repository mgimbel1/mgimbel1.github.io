**const weatherObject=XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=89015,us&appid="1787f66fdf83528a7652ed44f9ac908d",true);
weatherObject.send();
weatherObject.onload = function () {
let weatherinfo = JSON.parse (weatherObject.responsetext);
console.log (weatherinfo);
}
//end of onload
