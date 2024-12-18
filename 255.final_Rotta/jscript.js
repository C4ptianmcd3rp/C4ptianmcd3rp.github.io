const videoPlayer = document.getElementById('videoPlayer');
const videoSources = [
    'videos/255Day1soundtiny.mp4',
    'videos/255Night1soundtiny.mp4',
    'videos/255Day2soundtiny.mp4',
    'videos/255Night2soundtiny.mp4',
    'videos/255Day3soundtiny.mp4',
    'videos/255Night3soundtiny.mp4'
];

let currentIndex = 0;
let isMuted = true;

document.body.addEventListener('click', () => {
    if (isMuted) {
        // Unmute the video
        videoPlayer.muted = false;
        isMuted = false;
    } else {
        // Cycle to the next video
        currentIndex = (currentIndex + 1) % videoSources.length;
        videoPlayer.src = videoSources[currentIndex];
        videoPlayer.play();
    }
});
