  // Renders matches of search function
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

  // Clears all block elements in a parent element
function clear(target) {
  while(target.firstChild) {
    target.removeChild(target.firstChild)
  }
}

  // Displays the name and address of match after a place is selected from the results
  // Appends name and address to head
  // Appends showReview and businessInfo to body
function showMatch(match) {
  var details = document.createElement('div');
  details.classList.add('match');
  var head = document.createElement('div');
  head.classList.add('head');
  head.classList.add('row');
  var place = document.createElement('h2');
  place.textContent = match.name;
  place.classList.add('col-sm-9');
  var address = document.createElement('h4');
  address.textContent = match.address;
  address.classList.add('col-sm-3');
  head.appendChild(place);
  head.appendChild(address);

  var body = document.createElement('div');
  body.classList.add('row');
  body.appendChild(showReview(match));
  body.appendChild(businessInfo(match));

  details.appendChild(head);
  details.appendChild(body);

  return details;
}

  //Displays name and decription in review array in data object
function showReview(match) {
  var reviews = document.createElement('div');
  reviews.classList.add('col-sm-9');

  var row = document.createElement('div');
  row.classList.add('row');

  var name =  document.createElement('div');
  name.textContent = match.review[0];
  name.classList.add('col-xs-3');
  name.classList.add('center');

  var review = document.createElement('div');
  review.textContent = match.review[1];
  review.classList.add('col-xs-9');

  reviews.appendChild(row);
  row.appendChild(name);
  row.appendChild(review);

  return reviews;

}

  //Appends the list of more business information to match page
function businessInfo(match) {

  var info = document.createElement('div');
  info.classList.add('col-sm-3');
  info.classList.add('list-group');

  var hours = document.createElement('li');
  hours.textContent = 'Open: ' + match.hours;
  hours.classList.add('list-group-item');
  info.appendChild(hours);

  var reservations = document.createElement('li');
  reservations.textContent = 'Takes Reservations: ' + match.reservations;
  reservations.classList.add('list-group-item');
  info.appendChild(reservations);

  var delivery = document.createElement('li');
  delivery.textContent = 'Delivers: ' + match.delivery;
  delivery.classList.add('list-group-item');
  info.appendChild(delivery);

  var credit = document.createElement('li');
  credit.textContent = 'Takes Credit Card: ' + match.creditCard;
  credit.classList.add('list-group-item');
  info.appendChild(credit);

  var wifi = document.createElement('li');
  wifi.textContent = 'Wi-Fi: ' + match.wifi;
  wifi.classList.add('list-group-item');
  info.appendChild(wifi);

  var good = document.createElement('li');
  good.textContent = 'Good For: ' + match.goodFor;
  good.classList.add('list-group-item');
  info.appendChild(good);

  var alcohol = document.createElement('li');
  alcohol.textContent = 'Alcohol: ' + match.alcohol;
  alcohol.classList.add('list-group-item');
  info.appendChild(alcohol);

  return info;

}

  // Searches places, returns a match and appends the results
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

  // Finds the results selected, hides results block and displays individual block
  // Runs showMatch function and appends results to individual block
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
      individual.appendChild(showMatch(match[i]));
    }
  }
});


  // flips between results and individual pages
  // revmoves match
document.body.addEventListener('click', function rebound(theBack) {
  if (theBack.target.className.indexOf('back') !== -1) {
    results.classList.toggle('hidden');
    individual.classList.toggle('hidden');
    var match = document.getElementsByClassName('match');
    individual.removeChild(match[0]);
  }
});
