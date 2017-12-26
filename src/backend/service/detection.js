import cv, {Point, Vec, imdecode} from 'opencv4nodejs';


export function identify(buf) {
    const img = imdecode(buf);
    const { objects } = detect()(img);
    console.log(objects.length)
}

export function detect(haar = cv.HAAR_FRONTALFACE_ALT2) {
    const classifier = new cv.CascadeClassifier(haar);
    return function (img) {
        const grayImg = img.bgrToGray();
        return classifier.detectMultiScale(grayImg);
    }
}

export function draw(identified, img) {
    identified.map((rect) => {
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