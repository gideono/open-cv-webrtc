import path      from 'path'
import express   from 'express'
import http      from 'http'
import WebSocket from 'ws'
import { identify } from "./service/detection";

const app = express()
    , server = http.Server(app)
    , io =  new WebSocket.Server({ server })
    , isProd = process.env.NODE_ENV === 'production'
    , STATIC_PATH = isProd ? './static' : './dist/static';

app.use(express.static(path.join(__dirname, STATIC_PATH)));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, STATIC_PATH)));

io.on('connection', (session, req) => {

    const { connection: { remoteAddress } } = req
        , ip = remoteAddress === '::1' ? '0.0.0.0' : remoteAddress;

    console.log(`connection established from: ${ip}`);
    session.on('message', (blob) => session.send(identify(blob)));
    session.on('close', () => console.log(`${ip} has disconnected`));
    session.on('error', (e) => console.log(`caused by, ${ip}`, e));
});

server.listen(8080, () => console.log(`PORT: ${server.address().port}`));