import React from "react";
import {SimpleSocket} from "../communication/socket-client";
import {VideoCapture} from "../component/VideoCapture";
import {PreviewCapture} from "../component/PreviewCapture";

export default () => {
    const io = SimpleSocket();
    return [
        <VideoCapture transport={io} key="video"></VideoCapture>,
        <PreviewCapture key="img"></PreviewCapture>
    ];
};