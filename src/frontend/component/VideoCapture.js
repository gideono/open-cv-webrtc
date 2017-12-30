import React from 'react'
import RecordBnt from './RecordBtn'
import {start, stop} from "../service/capture";
import {WIDTH, HEIGHT} from "../utility/constants";
import io from '../communication/socket-client'
import {drawImage} from "../utility/canvas-support";
const send = (_) => drawImage(document.querySelector('#camera-stream'))((data) => io.send(data));
export const VideoCapture = ({}) =>

    /**
     * TODO use ref callback function to access dom element
     * <video id='camera-stream'
     *        playsInline width={WIDTH}
     *        height={HEIGHT}
     *        ref={(video) => this.state.start = capture.setup(target)}></video> */
    <div>
        <video id='camera-stream' playsInline width={WIDTH} height={HEIGHT}></video>
        <button onClick={() => start(document.querySelector('#camera-stream'), send)}>start</button>
        <button onClick={() => stop()}>stop</button>
        {/*<RecordBtn></RecordBtn>*/}
    </div>;
