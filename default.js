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
  place.setAttribute('id', 'match-place');
  place.setAttribute('place-name', match.name)
  var address = document.createElement('h4');
  address.textContent = match.address;
  address.classList.add('col-sm-3');
  head.appendChild(place);
  head.appendChild(address);

  var rating = document.createElement('div');
  rating.classList.add('row');
  rating.setAttribute('id','rating');

  var body = document.createElement('div');
  body.classList.add('row');
  var images = document.createElement('div');
  images.classList.add('row');
  images.classList.add('images');

  rating.appendChild(rate(match));
  images.appendChild(showMap(match));
  images.appendChild(showImages(match));
  body.appendChild(showReview(match));
  body.appendChild(businessInfo(match));

  details.appendChild(head);
  details.appendChild(rating);
  details.appendChild(images);
  details.appendChild(body);

  return details;
}

function rate(match) {
  var rating = document.createElement('div');
  rating.className = ('col-sm-12');
  for (var i = 0; i < 5; i++) {
    var star = document.createElement('i');
    star.className = ('fa fa-star-o fa-2x star');
    star.setAttribute('aria-hidden', 'true');
    star.setAttribute('data-rating', i);
    rating.appendChild(star);

  }
  var stars = rating.getElementsByClassName('star');
    for (var i = 0; i < match.rating; i++) {
      if (stars[i].getAttribute('data-rating') < match.rating) {
        stars[i].classList.remove('fa-star-o');
        stars[i].classList.add('fa-star');
      }
    }

  return rating;
}

function showMap(match) {
  var mapBlock = document.createElement('div');
  mapBlock.classList.add('col-md-6');
  mapBlock.classList.add('map-block');
  var map = document.createElement('iframe');
  map.setAttribute('src', match.map)
  map.classList.add('map');
  mapBlock.appendChild(map);

  return mapBlock;
}

function showImages(match) {
  var imageBlock = document.createElement('div');
  imageBlock.classList.add('col-md-6');
  imageBlock.classList.add('map-block');
  var image = document.createElement('img');
  image.setAttribute('src', match.images[0]);
  imageBlock.appendChild(image);
  image.classList.add('place-image');

  return imageBlock;
}
  //Displays name and decription in review array in data object
function showReview(match) {
  var reviews = document.createElement('div');
  reviews.classList.add('col-sm-9');
  reviews.setAttribute('id','review-column');

  var addReview = document.createElement('div');
  addReview.classList.add('row');
  addReview.setAttribute('id', 'add-review');

  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn');
  button.classList.add('btn-danger');
  button.textContent = 'Write a Review';

  var button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn');
  button.classList.add('btn-danger');
  button.setAttribute('id', 'review-button');
  button.textContent = 'Write a Review';

  for (var i = 0; i < match.review.length; i++) {
    var block = document.createElement('div');
    block.classList.add('row');
    block.classList.add('review');
    block.setAttribute('id', 'review-list');

    var name =  document.createElement('div');
    name.classList.add('col-xs-3');
    name.classList.add('center');
    name.textContent = match.review[i].commentor;

    var description = document.createElement('div');
    description.classList.add('col-xs-9');
    description.textContent = match.review[i].description;

    block.appendChild(name);
    block.appendChild(description);
    reviews.appendChild(block);
  }



  // reviews.appendChild(block);
  reviews.appendChild(addReview);
  addReview.appendChild(button);

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

 //Creates input form for submitting a new review.
function addReview() {
  var reviews = document.getElementById('review-column');
  reviews.classList.add('review-block');
  var newReview = document.createElement('div');
  var enterName = document.createElement('div');
  enterName.classList.add('input-group');
  enterName.classList.add('input-group-lg');
  enterName.classList.add('col-sm-11');
  enterName.setAttribute('id', 'review-form');

  var name = document.createElement('div');
  name.textContent = 'Name: ';

  var input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'John Doe...'
  input.classList.add('form-control');
  input.setAttribute('id', 'reviewer-name');

  var descriptionLabel = document.createElement('div');
  descriptionLabel.textContent = 'Review: ';

  var description = document.createElement('textarea');
  description.classList.add('form-control');
  description.placeholder = 'Your review helps others learn about great local businesses.'
  description.setAttribute('rows', '5');
  description.setAttribute('id', 'description');

  var submitReview = document.createElement('button');
  submitReview.type = 'button';
  submitReview.classList.add('btn');
  submitReview.classList.add('btn-primary');
  submitReview.classList.add('submit-review');
  submitReview.setAttribute('id', 'submit-review');
  submitReview.textContent = 'Submit Review';

  enterName.appendChild(name);
  enterName.appendChild(input);
  enterName.appendChild(descriptionLabel);
  enterName.appendChild(description);
  enterName.appendChild(submitReview);
  newReview.appendChild(enterName);
  reviews.appendChild(newReview);

  return reviews;
}

  // appends the values from name and description as a new comment in the review column
function submitReview() {
  var list = document.getElementById('review-column');
  var addReview = document.getElementById('add-review')
  var nameEntered = document.getElementById('reviewer-name');
  var commentor = nameEntered.value;
  var descriptionEntered = document.getElementById('description');
  var description = descriptionEntered.value;

  var lateReview = {};
  lateReview.commentor = commentor;
  lateReview.description = description;
  var placeName = document.getElementById('match-place');
  var selectName = placeName.getAttribute('place-name');
  for (var i = 0; i < places.length; i++) {
      if (places[i].name.indexOf(selectName) === 0) {
        places[i].review.push(lateReview);
        console.log(places[i].review);
    }
  }


  var newReview = document.createElement('div');
  newReview.classList.add('row');
  newReview.classList.add('review');
  var newName = document.createElement('div');
  newName.textContent = commentor;
  newName.classList.add('col-xs-3');
  newName.classList.add('center');
  var newDescription = document.createElement('div');
  newDescription.textContent = description;
  newDescription.classList.add('col-xs-9');

  newReview.appendChild(newName);
  newReview.appendChild(newDescription);
  list.insertBefore(newReview, addReview);

  return list;
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
    var individual = document.getElementById('individual');
    var name = theEvent.target.getAttribute('data-name');
    var match = [];


    for (var i = 0; i < places.length; i++) {
      for (param in places[i]) {
        if (typeof places[i][param] === 'string') {
          if (places[i][param].indexOf(name) === 0) {
            match.push(places[i]);
          }
        }
      }
    }
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

  //Add event listener for when write a review is selected, run showReview
document.body.addEventListener('click', function writeReview(write) {
  if (write.target.id.indexOf('review-button') === 0) {
    addReview();
  }
});

  //Add event listener that submits review and appends to reviews section
document.body.addEventListener('click', function submitting(submit) {
  if (submit.target.id.indexOf('submit-review') === 0) {
    submitReview();
    var reviewForm = document.getElementById('review-form');
    clear(reviewForm);
  }
});
