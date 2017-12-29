import path      from 'path'
import express   from 'express'
import http      from 'http'
import WebSocket from 'ws'
import { identify } from "./service/detection";

const app = express()
    , server = http.Server(app)
    , io =  new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, './dist/static')));

io.on('connection', (session, req) => {

    const { connection: { remoteAddress } } = req
        , ip = remoteAddress === '::1' ? '0.0.0.0' : remoteAddress;

    console.log(`connection established from: ${ip}`);
    session.on('message', (blob) => session.send(identify(blob)));
    session.on('close', () => console.log(`${ip} has disconnected`));
    session.on('error', (e) => console.log(`caused by, ${ip}`, e));
    session.send('something');
});

server.listen(8080, () => console.log(`PORT: ${server.address().port}`));