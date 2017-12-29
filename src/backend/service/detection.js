import cv, {Point, Vec, imdecode, imencode} from 'opencv4nodejs';
import fs from 'fs'

let count = 0;
const saveToDisk = (img) => fs.writeFile(`g${count = count + 1}.jpg`, img, 'binary', (err) => err && console.log(err));

export const identify = (buf, classification = cv.HAAR_FRONTALFACE_ALT2) =>
    imencode('.jpg', image(imdecode(buf), classification));

const image = (img, classification) => draw(detect(classification)(img), img);

export const detect = (classification = cv.HAAR_FRONTALFACE_ALT2) =>
    (img) => new cv.CascadeClassifier(classification).detectMultiScale(img.bgrToGray());

export const draw = ({ objects: identified }, img) => {
    (identified !== 0) && identified.map((rect) => {
        const color = new Vec(255, 0, 0);
        img.drawRectangle(
            new Point(rect.x, rect.y),
            new Point(rect.x + rect.width, rect.y + rect.height),
            color,
            { thickness: 2 }
        );
    });
    return img;
};