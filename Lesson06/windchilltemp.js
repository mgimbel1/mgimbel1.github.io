/*My Function*/ 
function doInputOutput () 
{
var temp a = parseFloat(document.getElementById('temp').value);
var temp b = parseFloat(document.getElementById('windSpeed').value);
var wc = windChill (temp a, temp b)
document.getElementById ('output').innerHTML = wc;
}
function windChill (tempF,speed) 	
{
var temp a = Math.pow(speed,.16);
return result = (35.74 + (.6215 * tempF) - (35.75* a) + (.4275 * tempF * a)).toFixed(2) + " &#8457; ";
}
