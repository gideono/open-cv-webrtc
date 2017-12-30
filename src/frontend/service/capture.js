import device from '../utility/media-device'
import constraint from '../utility/rtc-constraint'
import {canvasContext} from "../utility/canvas-support";
import {WIDTH, HEIGHT, INTERVALL} from "../utility/constants";
import {setup as createRecorder} from "../utility/media-recorder";

let mediaRecorder
  , videoTrack;

const setVideoStream = (target, stream) => {
    target.srcObject = stream;
    target.play();
};

const captureImage = (target) => canvasContext().drawImage(target, 0, 0, WIDTH, HEIGHT);

export const start = (target, callback) => device(constraint).then(stream => {
    (target.tagName === 'VIDEO') && setVideoStream(target, stream);
    videoTrack = stream.getVideoTracks();
    mediaRecorder = createRecorder(stream)(callback);
    mediaRecorder.start(INTERVALL);
}).catch(err => console.log(err));

export const stop = () => {
    let [mediaStreamTrack] = videoTrack;
    mediaStreamTrack.stop();
    mediaRecorder.stop();
};

// setTimeout(() => {
//     const video = document.querySelector('video');
//     const canvas = document.querySelector('canvas');
//
//     device(constraint).then(stream => {
//         video.srcObject = stream;
//         setInterval(() => {
//             canvas.getContext('2d', {}).drawImage(video, 0, 0, 640, 480);
//             canvas.toBlob((blob) => io.send(blob), 'image/jpg', 1);
//         }, 115)
//     });
// }, 100);