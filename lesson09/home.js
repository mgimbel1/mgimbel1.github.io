const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++ ) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") { 
        
        let town = document.createElement('section');
        let data = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');


        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        p2.textContent = "Year Founded: " + towns[i].yearFounded;
        p3.textContent = "Current Population: " + towns[i].currentPopulation;
        p4.textContent = "Average Rainfall: " + towns[i].averageRainfall + " inches";
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', "photo of "+ towns[i].name);
        image.setAttribute('class', 'townimage');
        data.setAttribute('class', 'towndata');

        data.appendChild(h2);
        data.appendChild(h3);
        data.appendChild(p2);
        data.appendChild(p3);
        data.appendChild(p4);
        town.appendChild(data);
        town.appendChild(image)

        document.querySelector('div.towns').appendChild(town);
        
    }
    }

  });
