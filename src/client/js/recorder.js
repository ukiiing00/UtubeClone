const startBtn = document.getElementById('startBtn');
const video = document.getElementById('preview');

let stream;
let recorder;
let videoFile;

const handleDownload = async () => {
    const a = document.createElement('a');
    a.href = videoFile;
    a.download = 'Myrecording.webm';
    document.body.appendChild(a);
    a.click();
};

const handleStop = async () => {
    startBtn.innerText = 'Start Recording';
    startBtn.removeEventListener('click', handleStop);
    startBtn.addEventListener('click', handleDownload);
    recorder.stop();
};

const handleStart = async () => {
    startBtn.innerText = 'Stop Recording';
    startBtn.removeEventListener('click', handleStart);
    startBtn.addEventListener('click', handleStop);
    recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

    // Set ondataavailable to an event handler for the dataavailable event;
    // this will be called whenever data is available for you.
    recorder.ondataavailable = (event) => {
        console.log(event);
        videoFile = URL.createObjectURL(event.data);
        video.srcObject = null;
        video.src = videoFile;
        video.loop = true;
        video.play();
    };
    recorder.start();
};

const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
    });
    video.srcObject = stream;
    video.play();
};

init();

startBtn.addEventListener('click', handleStart);
