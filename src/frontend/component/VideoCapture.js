import React from 'react'
import RecordBnt from './RecordBtn'
import {start, stop} from "../service/capture";
import {WIDTH, HEIGHT} from "../utility/constants";


export const VideoCapture = ({}) =>
    <div>
        <video id='camera-stream' playsInline width={WIDTH} height={HEIGHT}></video>
        <button onClick={() => start(document.querySelector('#camera-stream'), ({data}) => data)}>start</button>
        <button onClick={() => stop()}>stop</button>
        {/*<RecordBtn></RecordBtn>*/}
    </div>;
