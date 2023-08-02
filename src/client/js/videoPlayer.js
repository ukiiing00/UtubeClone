const video = document.querySelector('video');
const playBtn = document.getElementById('play');
const muteBtn = document.getElementById('mute');
const volumeRange = document.getElementById('volume');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');

let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    playBtn.innerText = video.paused ? 'Play' : 'Pause';
};

const handleMute = (e) => {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
    muteBtn.innerText = video.muted ? 'Unmuted' : 'Muted';
    volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
    const {
        target: { value },
    } = event;
    console.log(value);
    if (video.muted) {
        video.muted = false;
        muteBtn.innerText = 'Mute';
    } else if (value == 0) {
        video.muted = true;
        muteBtn.innerText = 'UnMuted';
    }
    volumeValue = value;
    video.volume = value;
};

const formatTime = (second) => {
    console.log(second);
    return new Date(second * 1000).toISOString().substring(11, 19);
};

const handleLoaderMetadata = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));
};

const handleTimeUpdate = () => {
    console.log(video.currentTime);
    currentTime.innerText = formatTime(Math.floor(video.currentTime));
};

playBtn.addEventListener('click', handlePlayClick);
muteBtn.addEventListener('click', handleMute);
volumeRange.addEventListener('input', handleVolumeChange);
video.addEventListener('loadedmetadata', handleLoaderMetadata);
video.addEventListener('timeupdate', handleTimeUpdate);
