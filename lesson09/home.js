
var imgArray = new Array();

imgArray[0]= 'image/fishhaven.jpg';
imgArray[1]= 'image/preston.jpg';
imgArray[2]= 'image/sodaspring.jpg';
imgArray[3]= 'image/placerton.jpg';
imgArray[4]= 'image/franklin.jpg';
imgArray[5]= 'image/greenville.jpg';

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL, imgArray)
  .then(function (response) {
  return response.json();
  })
.then(function (jsonObject) {
console.table(jsonObject);  // temporary checking for valid response and data parsing
var towns = jsonObject['towns'];
towns[0] = towns[1];
towns[1]= towns[4];
towns[2]= towns[5];
for (let i = 0; i < 3; i++ ) {
let card = document.createElement('section');
let info = document.createElement('section');

        let h2 = document.createElement('h2');
        let p1 = document.createElement('i');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
           let div = document.createElement('div');
        let image = document.createElement('img');
       
        h2.textContent = towns[i].name;
        p1.textContent = towns[i].motto + " ";
        p2.textContent = "Year Founded: " + towns[i].yearFounded;
        p3.textContent = "Population: " + towns[i].currentPopulation; 
        p4.textContent ="Annual Rain Fall: " + towns[i].averageRainfall;
         image.setAttribute('src', imgArray[i]);
           image.setAttribute('alt', towns[i].name + ' ' + 'sample ' + "image only");

            card.appendChild(info);
  info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
         info.appendChild(p3);
        info.appendChild(p4);
         card.appendChild(div);
         div.appendChild(image);

      
document.querySelector('div.cards').appendChild(card);
      
} 
});
