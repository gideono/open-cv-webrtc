import React from 'react'
import {start, stop} from "../service/capture";
import {drawImage} from "../utility/canvas-support";
import {RecordBtn} from "./record-btn";


export const VideoCapture = ({transport}) => {
    let target;
    const setTargetElement = (video) => (target = video);
    const send = (_) => drawImage(target)((data) => transport.send(data));
    return (
        [
            <div key="media">
                <video id="video-capture" poster="https://placeimg.com/640/485/people" playsInline ref={(video) => setTargetElement(video)}></video>
            </div>,
            <div key="media-control">
                <RecordBtn on={() => start(target, send)} off={() => stop()}></RecordBtn>
            </div>
        ]
    );

};