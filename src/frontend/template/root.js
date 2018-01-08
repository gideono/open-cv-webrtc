import React, {Fragment} from "react";
import {SimpleSocket} from "../communication/socket-client";
import {VideoCapture} from "../component/video-capture";
import {PreviewCapture} from "../component/preview-capture";
import {WarningNotification} from "../component/warning-notification"

export default () => {
    const io = SimpleSocket();
    return (
        <Fragment>
            <WarningNotification></WarningNotification>
            <main>
                <VideoCapture transport={io} ></VideoCapture>
                <PreviewCapture></PreviewCapture>
            </main>
            <nav></nav>
        </Fragment>
    )
};