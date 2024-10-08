var images = ["images/trogdor1.jpg", "images/trogdor2.jpg", "images/trogdor3.jpg"];
var currentIndex = 0;

// Add event listener for image click
document.getElementById("image").onclick = function() {
    switchImage();
};

function switchImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("image").src = images[currentIndex];
}
