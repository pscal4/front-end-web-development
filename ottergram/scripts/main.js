var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
// Gold challenge
var RANDOM_IMAGE = 'https://f4.bcbits.com/img/a0683688743_10.jpg';
var lastimagechanged;

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));

}
function addThumbClickedHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    if (thumb.getAttribute('data-image-url') == RANDOM_IMAGE) {
      thumb.setAttribute('data-image-url',lastimagechanged);
      changeRandomUrl();
    }
  });
}
function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray= [].slice.call(thumbnails);
  return thumbnailArray;
}
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickedHandler);
}
initializeEvents();

// Silver challenge. Enter the two functions into the Console
// and then run KillLinks();
function addAnchorClickedHandler(anchor) {
  'use strict';
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
  });
}
function KillLinks() {
  var anchors = document.getElementsByTagName('a');
  var anchorArray = [].slice.call(anchors);
  anchorArray.forEach(addAnchorClickedHandler);
}

// Gold Challenge
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changeRandomUrl() {
  var imageToChange = getRandomIntInclusive(0,4);
  // Just to see which one changes
  console.log('image changed is ' + imageToChange);
  var thumbnails = getThumbnailsArray();
  lastimagechanged = thumbnails[imageToChange].getAttribute('data-image-url');
  thumbnails[imageToChange].setAttribute('data-image-url',RANDOM_IMAGE);
}
changeRandomUrl();
