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
  place.classList.add('hover');
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

function seek(prop) {
  var select = document.createElement('div');
  select.classList.add('select');
  select.classList.add('row');
  var items = document.createElement('div');
  items.classList.add('clear');
  var place = document.createElement('h3');
  place.textContent = prop.name;
  var address = document.createElement('div');
  address.textContent = prop.address;
  var hours = document.createElement('div');
  hours.textContent = 'Open: ' + prop.hours;
  var reservations = document.createElement('div');
  reservations.textContent = 'Takes Reservations: ' + prop.reservations;
  var delivery = document.createElement('div');
  delivery.textContent = 'Delivers: ' + prop.delivery;
  var credit = document.createElement('div');
  credit.textContent = 'Takes Credit Card: ' + prop.creditCard;
  var wifi = document.createElement('div');
  wifi.textContent = 'Wi-Fi: ' + prop.wifi;
  var good = document.createElement('div');
  good.textContent = 'Good For: ' + prop.goodFor;
  var alcohol = document.createElement('div');
  alcohol.textContent = 'Alcohol: ' + prop.alcohol;
  place.classList.add('list-left');
  address.classList.add('list-right');
  select.appendChild(place);
  select.appendChild(address);
  select.appendChild(items);
  items.appendChild(hours);
  items.appendChild(good);
  items.appendChild(alcohol);
  items.appendChild(reservations);
  items.appendChild(delivery);
  items.appendChild(credit);
  items.appendChild(wifi);

  return select;
}

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


function clear(target) {
  while(target.firstChild) {
    target.removeChild(target.firstChild)
  }
}

document.body.addEventListener('click', function view(theEvent) {
  if (theEvent.target.className.indexOf('place-name') !== -1) {
    var results = document.getElementById('results');
    results.classList.add('hidden');
    var individual = document.getElementById('individual');
    individual.classList.toggle('hidden');
    var name = theEvent.target.getAttribute('data-name');
    var match = [];
    var individual = document.getElementById('individual');

    for (var i = 0; i < places.length; i++) {
      for (param in places[i]) {
        if (typeof places[i][param] === 'string') {
          if (places[i][param].indexOf(name) === 0) {
            match.push(places[i]);
          }
        }
      }
    }
    console.log(match);
    for (var i = 0; i < match.length; i++) {
      var individual = document.getElementById('individual');
      individual.appendChild(seek(match[i]));
    }
  }
});

document.body.addEventListener('click', function rebound(theBack) {
  if (theBack.target.className.indexOf('back') !== -1) {
    results.classList.toggle('hidden');
    individual.classList.toggle('hidden');
  }
});
