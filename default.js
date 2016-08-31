
var search = document.getElementById('search')
search.addEventListener('click', function() {
  var input = document.getElementById('input');
  var word = input.value.toLowerCase();
  var matches = [];
  var select = [];
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
  item.classList.add('row');
  item.classList.add('panel');
  item.classList.add('panel-default');
  var itemLeft = document.createElement('div');
  itemLeft.classList.add('list-left');
  var itemRight = document.createElement('div');
  itemRight.classList.add('list-right')
  var place = document.createElement('h3');
  place.setAttribute('data-name', data.name);
  place.classList.add('place-name')
  var address = document.createElement('div');
  var hours = document.createElement('p');
  place.textContent = data.name;
  hours.textContent = 'Open: ' + data.hours;
  address.textContent = data.address;
  item.appendChild(itemLeft);
  item.appendChild(itemRight);
  itemLeft.appendChild(place);
  itemLeft.appendChild(hours);
  itemRight.appendChild(address);

  return item;
}

function clear(target) {
  while(target.firstChild) {
    target.removeChild(target.firstChild)
  }
}


document.body.addEventListener('click', function view(theEvent) {
  if (theEvent.target.className.indexOf('place-name') !== -1) {
    var name = theEvent.target.getAttribute('data-name');
    console.log(name);
  }
});
