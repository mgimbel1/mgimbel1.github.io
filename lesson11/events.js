const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    var city = document.getElementById("currentCity").textContent;
if (city.includes("Preston")) {
  city = "Preston"
}
else if (city.includes("Soda Springs")) {
  city = "Soda Springs"
}

else {
  if  (city.includes("Fish Haven")) 
  city = "Fish Haven"
}
    
    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++ ) {
        if (towns[i].name == city) { 

        let data = document.createElement('section');
        let h3 = document.createElement('h3');

        h3.textContent = "Upcoming Events for " + city;

        function makeUL(array){
          //Create the list element;
          var list = document.createElement('ul');

          for (var j = 0; j < ((towns[i].events.length)); j++) {

            //Create the list item;
           var item = document.createElement('li');

            //set its contents;
            item.appendChild(document.createTextNode(towns[i].events[j]));

           //Add it to the list:
           list.appendChild(item);
          }
          
           //Finally, return the constructed list:
           return list;

        }
        data.appendChild(h3);
        //data.appendChild(list)

        document.querySelector('div.events').appendChild(data);
        document.querySelector('div.events').appendChild(makeUL());

        }
    }
  })  
