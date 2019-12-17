const weatherObject=new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=89015,us&appid="210c6be8650140bd61b5b896bccb52f1&units=imperial",true);
weatherObject.send();
weatherObject.onload = function () {
let weatherinfo = JSON.parse (weatherObject.responsetext);
console.log (weatherinfo);
}
//end of onload
