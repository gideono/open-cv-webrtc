import {WIDTH, HEIGHT} from "./constants";

let canvas = document.createElement('canvas');

const setDimensions = (width, height) => {
    canvas.width = width, canvas.height = height;
    return canvas;
};

export const canvasContext = (contextType = '2d', contextAttributes = {}, width = WIDTH, height = HEIGHT) =>
    setDimensions(width, height).getContext(contextType, contextAttributes);

export const drawImage = (target, dstX = 0, dstY = 0, context = canvasContext()) => {
    context.drawImage(target, dstX, dstY);
    return captureImage;
};

export const captureImage = (callback, mimeType = 'image/png', qualityArgument = 1) =>
    canvas.toBlob(callback, mimeType, qualityArgument);



