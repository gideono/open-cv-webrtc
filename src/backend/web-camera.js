import {imshow, VideoCapture, waitKey, Point, Vec} from "opencv4nodejs"
import {detect} from "./service/detection/detection";

const WEB_CAMERA_DEVICE_PORT = 0;

export function capture() {
    return new VideoCapture(WEB_CAMERA_DEVICE_PORT);
}

export function show() {
    while(true) {
        const frame = capture().read();
        const {objects} = detect()(frame);
        objects.map((rect) => {
            const color = new Vec(255, 0, 0);
            let thickness = 2;

            frame.drawRectangle(
                new Point(rect.x, rect.y),
                new Point(rect.x + rect.width, rect.y + rect.height),
                color,
                { thickness }
            );
        });
        imshow('frame', frame);
        waitKey(10);
    }
}

show();