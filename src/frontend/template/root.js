import React from "react";
import Notification from "../component/Notification";
import {SimpleSocket} from "../communication/socket-client";
import {VideoCapture} from "../component/VideoCapture";
import {PreviewCapture} from "../component/PreviewCapture";
import {WarningNotification} from "../component/warning-notification"


export default () => {
    const io = SimpleSocket();
    return [
        <main key="main">
            {/*<Notification></Notification>*/}
            <WarningNotification></WarningNotification>
            <VideoCapture transport={io} ></VideoCapture>,
            <PreviewCapture></PreviewCapture>
        </main>,
        <nav key="navigation"></nav>
    ];
};