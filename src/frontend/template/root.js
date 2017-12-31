import React from "react";
import Notification from "../component/Notification";
import {SimpleSocket} from "../communication/socket-client";
import {VideoCapture} from "../component/VideoCapture";
import {PreviewCapture} from "../component/PreviewCapture";

export default () => {
    const io = SimpleSocket();
    return [
        <main key="main">
            <Notification></Notification>
            <VideoCapture transport={io} ></VideoCapture>,
            <PreviewCapture></PreviewCapture>
        </main>,
        <nav key="navigation"></nav>
    ];
};