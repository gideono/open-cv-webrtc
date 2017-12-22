import cv from 'opencv4nodejs';

export function detect(haar = cv.HAAR_FRONTALFACE_ALT2) {
    const classifier = new cv.CascadeClassifier(haar);
    return function (img) {
        const grayImg = img.bgrToGray();
        return classifier.detectMultiScale(grayImg);
    }
}
