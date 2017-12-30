import device from '../utility/media-device'
import constraint from '../utility/rtc-constraint'
import {INTERVALL} from "../utility/constants";
import {setup as createRecorder} from "../utility/media-recorder";

let mediaRecorder
  , videoTrack;

const setVideoStream = (target, stream) => {
    target.srcObject = stream;
    target.play();
};

export const start = (target, callback) => device(constraint).then(stream => {
    (target.tagName === 'VIDEO') && setVideoStream(target, stream);
    videoTrack = stream.getVideoTracks();
    mediaRecorder = createRecorder(stream)(callback);
    mediaRecorder.start(INTERVALL);
}).catch(err => console.log(err));

export const stop = () => {
    if(mediaRecorder) {
        let [mediaStreamTrack] = videoTrack;
        mediaStreamTrack.stop();
        mediaRecorder.stop();
    }
};