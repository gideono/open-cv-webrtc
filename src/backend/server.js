import path      from 'path'
import express   from 'express'
import http      from 'http'
import https     from 'https'
import WebSocket from 'ws'
import { readFileSync } from 'fs'
import { key, cert } from "./security/ssl";
import { identify } from "./service/detection";

const app = express()
    , server = http.Server(app)
    , sslServer = https.createServer({key, cert}, app)
    , io =  new WebSocket.Server({ server: sslServer })
    , isProd = process.env.NODE_ENV === 'production'
    , STATIC_PATH = './dist/static';

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

sslServer.listen(443, () => console.log(`PORT: 443`));

server.listen(isProd ? 80 : 8080, () => console.log(`PORT: ${server.address().port}`));
