// JavaScript to handle video switching and playback state preservation

// Get references to the video elements and the text box
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var textBox = document.getElementById("text-box");

// Variables to store playback positions
var video1Time = 0;
var video2Time = 0;

// Flag to unmute the videos after the first click
var firstClick = true;

// Function to switch between videos
function switchVideos() {
    if (firstClick) {
        // Unmute the videos on the first click
        video1.muted = false;
        video2.muted = false;
        firstClick = false;
    }

    if (video1.style.display !== "none") {
        // Save the current time of video1 and switch to video2
        video1Time = video1.currentTime;
        video1.pause();
        video1.style.display = "none";

        video2.style.display = "block";
        video2.currentTime = video2Time;
        video2.play();
    } else {
        // Save the current time of video2 and switch to video1
        video2Time = video2.currentTime;
        video2.pause();
        video2.style.display = "none";

        video1.style.display = "block";
        video1.currentTime = video1Time;
        video1.play();
    }
}

// Add a click event listener to the text box to toggle videos
textBox.addEventListener("click", switchVideos);
// JavaScript Document