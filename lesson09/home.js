var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'franklin.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'fishhaven.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'greenville.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'placerton.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'preston.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'sodaspring.jpg';

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL, imgArray)
  .then(function (response) {
  return response.json();
  })
.then(function (jsonObject) {
console.table(jsonObject);  // temporary checking for valid response and data parsing
const towns = jsonObject['towns'];
for (let i = 0; i < towns.length; i++ ) {
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
        p1.textContent = "Our Motto: " + towns[i].motto;
        p2.textContent = "Year Founded: " + towns[i].yearFounded;
        p3.textContent = "Population: " + towns[i].currentPopulation; 
        p4.textContent ="Annual Rain Fall: " + towns[i].averageRainfall;
         image.setAttribute('src', imgArray[i].src);
           image.setAttribute('alt', towns[i].name + ' ' + 'sample ' + "image only");

            card.appendChild(info);
  info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
         info.appendChild(p3);
        info.appendChild(p4);
         card.appendChild(div);
         div.appendChild(image);

      
document.querySelector('section.cards').appendChild(card);
} 
});
