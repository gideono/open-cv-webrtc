import {imshow, VideoCapture, waitKey} from "opencv4nodejs"
import {detect} from "./service/detection/detection";

const WEB_CAMERA_DEVICE_PORT = 0;

export function capture() {
    return new VideoCapture(WEB_CAMERA_DEVICE_PORT);
}

export function show() {
    while(true) {
        const frame = capture().read();
        const {objects} = detect()(frame);
        console.log(objects.length);
        imshow('frame', frame);
        waitKey(100);
    }
}

show();