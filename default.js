
var search = document.getElementById('search')
search.addEventListener('click', function() {
  var input = document.getElementById('input');
  var word = input.value.toLowerCase();
  var matches = [];
  var results = document.getElementById('results');
  clear(results);

  //finds description of item and creates new array matches of matched text
  for (var i = 0; i < places.length; i++) {
    for (param in places[i]) {
      if (typeof places[i][param] === 'string') {
        if(places[i][param].toLowerCase().indexOf(word) !== -1)
        matches.push(places[i]);
      }
    }
  }

  for (var i = 0; i < matches.length; i++) {
    var results = document.getElementById('results');
    results.appendChild(item(matches[i]));
  }
});

function item(data) {
  var item = document.createElement('div');
  var itemLeft = document.createElement('div');
  var itemRight = document.createElement('div');
  itemLeft.classList.add('list-left');
  itemRight.classList.add('list-right')
  var place = document.createElement('h3');
  var address = document.createElement('div');
  place.textContent = data.name;
  address.textContent = data.address;
  item.appendChild(itemLeft);
  item.appendChild(itemRight);
  itemLeft.appendChild(place);
  itemRight.appendChild(address);

  return item;
}

function clear(target) {
  while(target.firstChild) {
    target.removeChild(target.firstChild)
  }
}
