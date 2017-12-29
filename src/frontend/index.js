import React from 'react'
import reactDOM from 'react-dom'
import create from './template/container'
import './service/capture'

const Root = () => 
        [
            <video key='video' autoPlay playsInline></video>,
            <img key='img' width="640" height="480" />,
            <canvas key='canvas' width="640" height="480"></canvas>
        ];


reactDOM.render(<Root/>, create());