// JavaScript to handle video switching with playback state preservation

// Get references to the main video element and the text box
var mainVideo = document.getElementById("mainVideo");
var textBox = document.getElementById("text-box");

// Array of video sources
var videoSources = [
    "videos/projectvideo1revise.mp4",
    "videos/projectvideo2revise.mp4",
    "videos/projectvideo3revise.mp4"
];

// Variable to track the current video index
var currentVideoIndex = 0;

// Variable to unmute videos after the first click
var firstClick = true;

// Function to randomly pick a new video index (excluding the current one)
function getRandomVideoIndex() {
    var newIndex;
    do {
        newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex); // Ensure the new video is different
    return newIndex;
}

// Function to switch videos
function switchVideo() {
    if (firstClick) {
        // Unmute the video on the first click
        mainVideo.muted = false;
        firstClick = false;
    }

    // Save the current playback time
    var currentTime = mainVideo.currentTime;

    // Get a new random video index
    currentVideoIndex = getRandomVideoIndex();

    // Update the video source and resume playback from the saved time
    mainVideo.src = videoSources[currentVideoIndex];
    mainVideo.currentTime = currentTime;
    mainVideo.play();
}

// Add a click event listener to the text box to trigger video switching
textBox.addEventListener("click", switchVideo);
