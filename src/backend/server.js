import path      from 'path'
import express   from 'express'
import http      from 'http'
import WebSocket from 'ws'

const app = express()
    , server = http.Server(app)
    , io =  new WebSocket.Server({ server });

// resources: https://github.com/websockets/ws#expressjs-example
/**
 * Socket will take ether Blob or base64encoded image.
 * Both data type will need to be converted to buffered array cv.imdecode
 * takes a buffered image type.
 * Detect face and respond with image
 * ----- on request -----
 * const buffer = Buffer(blob, 'binary');
 * or
 * const buffer = Buffer.from(base64Data, 'base64')
 *
 * ---- on response -----
 * const img = cv.imdecode(buffer);
 *
 * const arr: Uint8Array = cv.imencode('.jpg', img);
 * send(arr)
 *
 * on client -----
 * socket.on('message', (msg)=> {
 * const blob = new Blob( [ new Uint8Array(msg) ], { type: "image/jpeg" } );
 * const imageUrl = urlCreator.createObjectURL( blob  );
 * })
 * */

app.use(express.static(path.join(__dirname, './dist/static')));
// io.clients list of clients I assume
io.on('connection', (session, req) => {
    const { connection: { remoteAddress } } = req
        , ip = remoteAddress === '::1' ? '0.0.0.0' : remoteAddress;

    console.log(`connection established from: ${ip}`);
    session.on('message', (msg) => console.log(msg));
    session.on('close', () => console.log(`${ip} has disconnected`));
    //TODO find a why to close gracefully
    session.on('error', (e) => console.log(`caused by, ${ip}`, e));
    session.send('something');
});

server.listen(8080, () => console.log(`PORT: ${server.address().port}`));