import React from 'react'
import reactDOM from 'react-dom'
import create from './template/container'
import {VideoCapture} from "./component/VideoCapture";
import {SimpleSocket} from "./communication/socket-client";


const Root = () =>
        [
            <VideoCapture transport={SimpleSocket()} key="video"></VideoCapture>,
            <img key='img' width="640" height="480" />,
            <canvas key='canvas' width="640" height="480"></canvas>
        ];


reactDOM.render(<Root/>, create());