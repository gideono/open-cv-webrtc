import React from "react";
import {SimpleSocket} from "../communication/socket-client";
import {VideoCapture} from "../component/video-capture";
import {PreviewCapture} from "../component/preview-capture";
import {WarningNotification} from "../component/warning-notification"

export default () => {
    const io = SimpleSocket();
    return [ //TODO use fragments instead of array, https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
        <WarningNotification key="notification"></WarningNotification>,
        <main key="main">
            <VideoCapture transport={io} ></VideoCapture>
            <PreviewCapture></PreviewCapture>
        </main>,
        <nav key="navigation"></nav>
    ];
};