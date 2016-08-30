
var search = document.getElementById('search')
search.addEventListener('click', function() {
  var input = document.getElementById('input');
  var word = input.value.toLowerCase();
  var matches = [];



  //finds description of item and creates new array matches of matched text
  for (var i = 0; i < places.length; i++) {
    for (param in places[i]) {
      if (typeof places[i][param] === 'string') {
        if(places[i][param].toLowerCase().indexOf(word) !== -1)
        matches.push(places[i]);
      }
    }
  }
  console.log(matches);

  for (var i = 0; i < matches.length; i++) {
    var results = document.getElementById('results');
    results.appendChild(item(matches[i]));
  }
});

function item(data) {
  var item = document.createElement('div');
  item.classList.add('panel')
  item.classList.add('panel-default')
  var place = document.createElement('h1');
  var address = document.createElement('h3');
  place.textContent = data.name;
  address.textContent = data.address;
  item.appendChild(place);
  item.appendChild(address);

  return item;
}
