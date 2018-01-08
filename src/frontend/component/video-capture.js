import React, {Fragment} from 'react'
import placeholder from "../img/placeholder.svg"
import {start, stop} from "../service/capture";
import {drawImage} from "../utility/canvas-support";
import {RecordBtn} from "./record-btn";

export const VideoCapture = ({transport}) => {
    let target;
    const setTargetElement = (video) => (target = video);
    const send = (_) => drawImage(target)((data) => transport.send(data));
    return (
        <Fragment>
            <div>
                <video id="video-capture" poster={placeholder} playsInline ref={(video) => setTargetElement(video)}></video>
            </div>
            <div>
                <RecordBtn on={() => start(target, send)} off={() => stop()}></RecordBtn>
            </div>
        </Fragment>
    );
};