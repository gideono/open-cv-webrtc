import path      from 'path'
import express   from 'express'
import http      from 'http'
import WebSocket from 'ws'

const app = express()
    , server = http.Server(app)
    , io =  new WebSocket.Server({ server });


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

io.on('connection', (socket) => {

    // todo socket.on('capture', blob => perform detection and respond to client)

});

server.listen(8080, () => console.log(`PORT: ${server.address().port}`));