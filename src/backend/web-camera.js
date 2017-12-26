import {imshow, VideoCapture, waitKey, Point, Vec} from "opencv4nodejs"
import {detect, draw} from "./service/detection/detection";

const WEB_CAMERA_DEVICE_PORT = 0;

export function capture() {
    return new VideoCapture(WEB_CAMERA_DEVICE_PORT);
}

export function show() { //TODO rethink detection api
    while(true) {
        let frame = capture().read();
        const {objects} = detect()(frame);
        frame = draw(objects, frame);
        imshow('frame', frame);
        waitKey(10);
    }
}

show();