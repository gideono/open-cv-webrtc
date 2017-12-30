import {WIDTH, HEIGHT} from "./constants";

let canvas = document.createElement('canvas');

const setDimensions = (width, height) => {
    canvas.width = width, canvas.height = height;
    return canvas;
};

export const canvasContext = (contextType = '2d', contextAttributes = {}, width = WIDTH, height = HEIGHT) =>
    setDimensions(width, height).getContext(contextType, contextAttributes);




