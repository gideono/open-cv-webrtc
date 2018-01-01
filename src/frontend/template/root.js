import React from "react";
import Notification from "../component/notification";
import {SimpleSocket} from "../communication/socket-client";
import {VideoCapture} from "../component/video-capture";
import {PreviewCapture} from "../component/preview-capture";
import {WarningNotification} from "../component/warning-notification"


export default () => {
    const io = SimpleSocket();
    return [
        <main key="main">
            <WarningNotification></WarningNotification>
            <VideoCapture transport={io} ></VideoCapture>,
            <PreviewCapture></PreviewCapture>
        </main>,
        <nav key="navigation"></nav>
    ];
};