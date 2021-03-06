// Finds search match
function search(input) {
  var word = input.value.toLowerCase();
  var matches = [];
  var results = document.getElementById('results');
  clear(results);

  //finds description of item and creates new array matches of matched text
  for (var i = 0; i < places.length; i++) {
    for (prop in places[i]) {
      if (typeof places[i][prop] === 'string') {
        if(places[i][prop].toLowerCase().indexOf(word) !== -1) {
          matches.push(places[i]);
          break;
        }
      }
    }
  }

  for (var i = 0; i < matches.length; i++) {
    var results = document.getElementById('results');
    results.appendChild(searchResults(matches[i]));
  }
}

// Renders matches of search function
function searchResults(data) {
  var item = document.createElement('div');
  item.className = 'row panel panel-default';
  var itemLeft = document.createElement('div');
  itemLeft.classList.add('list-left');
  var itemRight = document.createElement('div');
  itemRight.classList.add('list-right')
  var place = document.createElement('h3');
  place.setAttribute('data-name', data.name);
  place.className = 'hover place-name';
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
  head.className = 'head row';
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
  images.className = 'row images';

  rating.appendChild(showStars(match));
  images.appendChild(showImages(match));
  images.appendChild(showMap(match));
  body.appendChild(showReview(match));
  body.appendChild(businessInfo(match));

  details.appendChild(head);
  details.appendChild(rating);
  details.appendChild(images);
  details.appendChild(body);

  return details;
}

//Shows the rating of the place
function showStars(match) {
  var rating = document.createElement('div');
  rating.className = ('col-sm-12');
  for (var i = 0; i < 5; i++) {
    var star = document.createElement('i');
    star.className = ('fa fa-star-o fa-2x star');
    star.setAttribute('aria-hidden', 'true');
    star.setAttribute('data-rating', i+1);
    rating.appendChild(star);
  }

  var placeRatings = []
  for (var i = 0; i < match.review.length; i++) {
    placeRatings.push(match.review[i].rating);
  }
  var sum = placeRatings.reduce(function(a, b) {
    return a + b;
  }, 0);

  var average = sum / placeRatings.length;
  var averageRating = Math.round(average * 10) / 10;
  match.rating = averageRating;

  var stars = rating.getElementsByClassName('star');
  for (var i = 0; i < average; i++) {
    if (stars[i].getAttribute('data-rating') <= average) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
  }

  var text = document.createElement('span');
  text.className = 'star-text';
  text.textContent = averageRating + ' stars'

  rating.appendChild(text);

  return rating;
}

//Displays Map
function showMap(match) {
  var mapBlock = document.createElement('div');
  mapBlock.className = 'col-md-6 map-block';
  var map = document.createElement('iframe');
  map.setAttribute('src', match.map)
  map.classList.add('map');
  mapBlock.appendChild(map);

  return mapBlock;
}

//Displays Images
function showImages(match) {
  var imageBlock = document.createElement('div');
  imageBlock.className = 'col-md-6 map-block';
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

  var viewReview = document.createElement('div');
  viewReview.className = 'row review-text';
  viewReview.textContent = 'Reviews';
  reviews.appendChild(viewReview);

  var addReview = document.createElement('div');
  addReview.classList.add('row');
  addReview.setAttribute('id', 'add-review');

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-danger'
  button.setAttribute('id', 'review-button');
  button.textContent = 'Write a Review';

  for (var i = 0; i < match.review.length; i++) {
    var block = document.createElement('div');
    block.className = 'row review';

    var name =  document.createElement('div');
    name.className = 'col-xs-3 center review-name';
    name.textContent = match.review[i].commentor;

    var descriptionBlock = document.createElement('div');
    descriptionBlock.classList.add('col-xs-9');

    var rating = document.createElement('div');
    rating.className = 'row';
    rating.setAttribute('id', match.review[i].commentor);
    rating.appendChild(drawStars());
    var stars = rating.getElementsByClassName('star');
    for (var key = 0; key < match.review[i].rating; key++) {
      if (stars[key].getAttribute('data-rating') < match.review[i].rating) {
        stars[key].classList.remove('fa-star-o');
        stars[key].classList.add('fa-star');
      }
    }
    descriptionBlock.appendChild(rating);

    var description = document.createElement('div');
    description.classList.add('row');
    description.textContent = match.review[i].description;
    descriptionBlock.appendChild(description);

    block.appendChild(name);
    block.appendChild(descriptionBlock);
    reviews.appendChild(block);
  }

  reviews.appendChild(addReview);
  addReview.appendChild(button);

  return reviews;
}

//Draws five empty stars
function drawStars() {
  var rating = document.createElement('div');
  rating.className = ('col-sm-12');
  for (var i = 0; i < 5; i++) {
    var star = document.createElement('i');
    star.className = ('fa fa-star-o fa-2x star');
    star.setAttribute('aria-hidden', 'true');
    star.setAttribute('data-rating', i);
    rating.appendChild(star);
  }
  return rating;
}

//Appends the list of more business information to match page
function businessInfo(match) {

  var info = document.createElement('div');
  info.className = 'col-sm-3 list-group';

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
  enterName.className = 'input-group input-group-lg col-sm-11';
  enterName.setAttribute('id', 'review-form');

  var name = document.createElement('div');
  name.textContent = 'Name: ';

  var input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'John Doe...'
  input.classList.add('form-control');
  input.setAttribute('id', 'reviewer-name');

  var select = document.createElement('div');
  select.textContent = 'Select your rating:';

  var rating = document.createElement('div'); //add rating here
  rating.appendChild(selectRating());

  var descriptionLabel = document.createElement('div');
  descriptionLabel.textContent = 'Review: ';

  var description = document.createElement('textarea');
  description.classList.add('form-control');
  description.placeholder = 'Your review helps others learn about great local businesses.'
  description.setAttribute('rows', '5');
  description.setAttribute('id', 'description');

  var submitReview = document.createElement('button');
  submitReview.type = 'button';
  submitReview.className = 'btn btn-primary submit-review';
  submitReview.setAttribute('id', 'submit-review');
  submitReview.textContent = 'Submit Review';

  enterName.appendChild(name);
  enterName.appendChild(input);
  enterName.appendChild(select);
  enterName.appendChild(rating);
  enterName.appendChild(descriptionLabel);
  enterName.appendChild(description);
  enterName.appendChild(submitReview);
  newReview.appendChild(enterName);
  reviews.appendChild(newReview);

  return reviews;
}

//Users can click on a star and assign rating to new review
function selectRating() {
  var rating = document.createElement('div');
  rating.className = ('col-sm-12');
  for (var i = 0; i < 5; i++) {
    var star = document.createElement('i');
    star.className = ('fa fa-star-o fa-2x comment-stars rating');
    star.setAttribute('aria-hidden', 'true');
    star.setAttribute('comment-rating', i+1);
    rating.appendChild(star);
  }


  rating.addEventListener('click', function selectRate(theEvent) {
    var stars = document.getElementsByClassName('comment-stars');
    var rating = theEvent.target.getAttribute('comment-rating');
    for (var i = 0; i < stars.length; i++) {
      stars[i].classList.add('fa-star-o');
      stars[i].classList.remove('current');
      if (stars[i].getAttribute('comment-rating') === rating) {
        stars[i].classList.add('current');
      }
      if (stars[i].getAttribute('comment-rating') <= rating) {
        stars[i].classList.remove('fa-star-o')
        stars[i].classList.add('fa-star');
      }
    }

  });
  return rating;
}

//Appends the values from name and description as a new comment in the review column
function submitReview() {
  var list = document.getElementById('review-column');
  var addReview = document.getElementById('add-review')
  var nameEntered = document.getElementById('reviewer-name');
  var commentor = nameEntered.value;
  var descriptionEntered = document.getElementById('description');
  var description = descriptionEntered.value;
  var star = document.getElementsByClassName('current');
  var rating = star[0].getAttribute('comment-rating');


  var lateReview = {};
  lateReview.commentor = commentor;
  lateReview.description = description;
  lateReview.rating = parseInt(rating, 10);
  var placeName = document.getElementById('match-place');
  var selectName = placeName.getAttribute('place-name');
  for (var i = 0; i < places.length; i++) {
    if (places[i].name.indexOf(selectName) === 0) {
      places[i].review.push(lateReview);
    }
  }


  var newReview = document.createElement('div');
  newReview.className = 'row review';
  var newName = document.createElement('div');
  newName.textContent = commentor;
  newName.className = 'col-xs-3 center review-name';

  var newBlock = document.createElement('div');
  newBlock.classList.add('col-xs-9');
  var newRating = document.createElement('div');
  newRating.classList.add('row');
  for (var i = 0; i < 5; i++) {
    var star = document.createElement('i');
    star.className = ('fa fa-star-o fa-2x star');
    star.setAttribute('aria-hidden', 'true');
    star.setAttribute('data-rating', i);
    newRating.appendChild(star);

  }
  var stars = newRating.getElementsByClassName('star');
  for (var i = 0; i < rating; i++) {
    if (stars[i].getAttribute('data-rating') < rating) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
  }

  var newDescription = document.createElement('div');
  newDescription.textContent = description;
  newDescription.classList.add('row');

  newBlock.appendChild(newRating);
  newBlock.appendChild(newDescription);
  newReview.appendChild(newName);
  newReview.appendChild(newBlock);
  list.insertBefore(newReview, addReview);


  return list;
}

//Calculates new average rating for business and redraws business rating on new review submission
function updateStars () {
  var match = []
  var placeName = document.getElementById('match-place');
  var selectName = placeName.getAttribute('place-name');
  for (var i = 0; i < places.length; i++) {
    if (places[i].name.indexOf(selectName) === 0) {
      match.push(places[i]);
    }
  }

  var placeRatings = []
  for (var i = 0; i < match[0].review.length; i++) {
    placeRatings.push(match[0].review[i].rating);
  }
  var sum = placeRatings.reduce(function(a, b) {
    return a + b;
  }, 0);

  var average = sum / placeRatings.length;
  var averageRating = Math.round(average * 10) / 10;

  var rating = document.getElementById('rating');
  var stars = rating.getElementsByClassName('star');
  for (var i = 0; i < stars.length; i++) {
    if (stars[i].getAttribute('data-rating') <= average) {
      stars[i].classList.remove('fa-star-o');
      stars[i].classList.add('fa-star');
    }
    if (stars[i].getAttribute('data-rating') > average) {
      stars[i].classList.remove('fa-star');
      stars[i].classList.add('fa-star-o');
    }
  }

  var text = rating.getElementsByClassName('star-text');
  text[0].textContent = averageRating + ' stars';

  return rating;
}

//Filters where search is being called and then runs appropriate search function
document.body.addEventListener('click', function searchAnywhere(theEvent) {
  if (theEvent.target.id === 'search') {
    var input = document.getElementById('input');
  }
  if (theEvent.target.id === 'landing-search') {
    var input = document.getElementById('landing-input');
  }
  search(input);
});

//Hides landing page and shows results page when search occurs on landing page
document.body.addEventListener('click', function viewResults(theSearch) {
  if (theSearch.target.id === 'landing-search') {
    var landingPage = document.getElementById('landing-page');
    landingPage.classList.toggle('hidden');
    var container = document.getElementById('container');
    container.classList.toggle('hidden');
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
      for (prop in places[i]) {
        if (typeof places[i][prop] === 'string') {
          if (places[i][prop].indexOf(name) === 0) {
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
    updateStars();
    var reviewForm = document.getElementById('review-form');
    clear(reviewForm);
  }
});
