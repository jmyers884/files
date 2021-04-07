// JavaScript Document //

// Array that contains the images
const imgArray = ['angeltree.jpg', 'blueridge.jpg', 'durango-silverton.jpg', 'keywest.jpg', 'mtrainier.jpg'];
// Variable containing the file path for the images
const imgPath = 'img/';

// Function to swap the images
function swapImage(img) {
  let largeImg = document.getElementById('largeImage');
  let newImg;
  newImg = imgArray[img];
  largeImg.src = imgPath + newImg;
}

// Array that contains the captions
const captionArray = [`The Angel Tree, one of the oldest living oak trees`, `Scenic view of the Blue Ridge Parkway`, `The Durango & Silverton Narrow Gauge Railroad Train`, `The southernmost point in the United States`, `Mount Rainier the highest volcanic peak in the contiguous United States`];

// Function to create the captions
function swapCaption(cap) {
  let caption = document.getElementById('caption');
  let newCaption;
  newCaption = captionArray[cap];
  caption.innerHTML = newCaption;
}

// Function and conditional to add and remove the border
let previousEl;

function mark(currentEl) {
  let id = currentEl.id;

  if (previousEl) {
    previousEl.style.border = 'unset';
    currentEl.style.border = '3px solid black';
    previousEl = document.getElementById(id);
  } else {
    currentEl.style.border = '3px solid black';
    previousEl = document.getElementById(id);
  }
}
