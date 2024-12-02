// Select all the image boxes
var imageBoxes = document.querySelectorAll('.image-box');

// Background images for each image box
var images = [
  'images/comic1.jpg',
  'images/comic2.jpg',
  'images/comic3.jpg',
  'images/comic4.jpg',
  'images/comic5.jpg',
  'images/comic6.jpg',
  'images/comic7.jpg',
  'images/comic8.jpg',
  'images/comic9.jpg',
  'images/comic10.jpg',
  'images/comic11.jpg',
  'images/comic12.jpg'
];

// Intersection Observer callback to change background images when image box is in view
function observerCallback(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Get the index of the image box that is currently in view
      var index = Array.prototype.indexOf.call(imageBoxes, entry.target);
      // Change the background image of the image box that is in view
      entry.target.style.backgroundImage = 'url(' + images[index] + ')';
    }
  });
}

// Set up the Intersection Observer to observe each image box
var observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5 // Trigger when at least 50% of the image box is visible
};

// Create an observer instance and observe each image box
var observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each image box
imageBoxes.forEach(function(imageBox) {
  observer.observe(imageBox);  // The observer starts observing each image box
});
// JavaScript Document