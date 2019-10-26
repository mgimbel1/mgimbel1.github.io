function doInputOutput () 
{
var temp a = parseFloat(document.getElementById('temp').value);
var speed b = parseFloat(document.getElementById('windSpeed').value);
var wc = wind chill ( temp a, speed b)
document.getElementById ('output').innerHTML = wc;
}
function windChill (tempF,speedb) 	
{
var temp a = Math.pow(speedb,.16);
return result = (35.74 + (.6215 * tempF) - (35.75* temp a) + (.4275 * tempF * temp a)).toFixed(2) + " &#8457; ";
}
