import React from 'react'
import {start, stop} from "../service/capture";
import {WIDTH, HEIGHT} from "../utility/constants";
import {SimpleSocket} from '../communication/socket-client'
import {drawImage} from "../utility/canvas-support";


// const io = SimpleSocket();
// const send = (_) => drawImage(document.querySelector('#camera-stream'))((data) => io.send(data));



export const VideoCapture = ({send}) => {
    let target;
    const setTargetElement = (video) => (target = video);
    return (
        <div>
            <video id='camera-stream' playsInline width={WIDTH} height={HEIGHT} ref={(video) => setTargetElement(video)}></video>
            <button onClick={() => start(target, send)}>start</button>
            <button onClick={() => stop()}>stop</button>
            {/*<RecordBtn></RecordBtn>*/}
        </div>
    );

};


