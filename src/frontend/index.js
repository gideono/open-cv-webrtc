import React from 'react'
import reactDOM from 'react-dom'
import create from './template/container'
import {VideoCapture} from "./component/VideoCapture";

const Root = () => 
        [
            <VideoCapture key="video"></VideoCapture>,
            <img key='img' width="640" height="480" />,
            <canvas key='canvas' width="640" height="480"></canvas>
        ];


reactDOM.render(<Root/>, create());