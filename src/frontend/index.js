import React from 'react'
import reactDOM from 'react-dom'
import create from './template/container'
import './service/capture'

const Root = () => 
    <div>
        <video autoPlay playsInline></video>
        <canvas width="640" height="480"></canvas>
    </div>;


reactDOM.render(<Root/>, create());