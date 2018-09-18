import   React, { Fragment }   from "react";
import { SimpleSocket }        from "../communication/socket-client";
import { VideoCapture }        from "../component/video-capture";
import { PreviewCapture }      from "../component/preview-capture";
import { WarningNotification } from "../component/warning-notification";

export default () => {
    //TODO notify if connection fails
    const io = SimpleSocket();
    return (
        <Fragment>
            <WarningNotification></WarningNotification>
            <main>
                <PreviewCapture></PreviewCapture>
                <VideoCapture transport={io} ></VideoCapture>
            </main>
            <nav></nav>
        </Fragment>
    )
};