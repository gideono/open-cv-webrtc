import React from 'react'
import reactDOM from 'react-dom'
import create from './template/container'
import {VideoCapture} from "./component/VideoCapture";
import {PreviewCapture} from "./component/PreviewCapture";
import {SimpleSocket} from "./communication/socket-client";


const Root = () => {
    const io = SimpleSocket();
    return [
        <VideoCapture transport={io} key="video"></VideoCapture>,
        <PreviewCapture key="img"></PreviewCapture>
    ];
};

reactDOM.render(<Root/>, create());