import React from 'react'
import {start, stop} from "../service/capture";
import {drawImage} from "../utility/canvas-support";


export const VideoCapture = ({transport}) => {
    let target;
    const setTargetElement = (video) => (target = video);
    const send = (_) => drawImage(target)((data) => transport.send(data));
    return (
        <div>
            <video id="video-capture" poster="https://placeimg.com/640/485/people" playsInline ref={(video) => setTargetElement(video)}></video>
            <button onClick={() => start(target, send)}>start</button>
            <button onClick={() => stop()}>stop</button>
        </div>
    );

};