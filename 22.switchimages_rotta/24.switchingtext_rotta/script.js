// Text options
var textOptions = ["round boy", "boy who is round", "round boy supreme"];
var currentTextIndex = 0;

// Select the text box and image
var textBox = document.getElementById('text-box');
var image = document.getElementById('image');

// Function to cycle through the text
function changeText() {
    currentTextIndex = (currentTextIndex + 1) % textOptions.length;
    textBox.textContent = textOptions[currentTextIndex];
}

// Event listener for clicks on both the image and the text box
image.addEventListener('click', changeText);
textBox.addEventListener('click', changeText);
