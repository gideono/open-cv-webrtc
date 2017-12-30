import React from 'react'
import {start, stop} from "../service/capture";
import {WIDTH, HEIGHT} from "../utility/constants";
import {drawImage} from "../utility/canvas-support";


export const VideoCapture = ({transport}) => {
    let target;
    const setTargetElement = (video) => (target = video);
    const send = (_) => drawImage(target)((data) => transport.send(data));
    return (
        <div>
            <video id='camera-stream' playsInline width={WIDTH} height={HEIGHT} ref={(video) => setTargetElement(video)}></video>
            <button onClick={() => start(target, send)}>start</button>
            <button onClick={() => stop()}>stop</button>
            {/*<RecordBtn></RecordBtn>*/}
        </div>
    );

};


