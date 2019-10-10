var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
document.getElementById("datetoday").innerHTML = (days[d.getDay()] + ", " + d.getDate() + " " +month[d.getMonth()]+ " " + d.getFullYear());
