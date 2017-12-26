import path     from 'path'
import express  from 'express'
import http     from 'http'
import SocketIO from 'socket.io'

const app = express()
    , server = http.Server(app)
    , socket = new SocketIO(server);


/**
 * Socket will take ether Blob or base64encoded image.
 * Both data type will need to be converted to buffered array cv.imdecode
 * takes a buffered image type.
 * Detect face and respond with image
 *
 * const buffer = Buffer(blob, 'binary');
 * or
 * const buffer = Buffer.from(base64Data, 'base64')
 *  const img = cv.imdecode(buffer);
 * */

app.use(express.static(path.join(__dirname, './dist/static')));


server.listen(8080, () => console.log(`PORT: ${server.address().port}`));