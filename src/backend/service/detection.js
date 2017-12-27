import cv, {Point, Vec, imdecode, imencode} from 'opencv4nodejs';
import fs from 'fs'


const saveToDisk = (img) => fs.writeFile('g.jpg', img, (err) => console.log(err));

export function identify(buf) {
    let img = imdecode(buf);
    const { objects } = detect()(img);
    console.log(objects.length);
    return imencode('.jpg', draw(objects, img));
}

export function detect(haar = cv.HAAR_FRONTALFACE_ALT2) {
    const classifier = new cv.CascadeClassifier(haar);
    return function (img) {
        const grayImg = img.bgrToGray();
        return classifier.detectMultiScale(grayImg);
    }
}

export function draw(identified, img) {
    (identified !== 0) && identified.map((rect) => {
        const color = new Vec(255, 0, 0);
        let thickness = 2;

        img.drawRectangle(
            new Point(rect.x, rect.y),
            new Point(rect.x + rect.width, rect.y + rect.height),
            color,
            { thickness }
        );
    });
    return img;
}