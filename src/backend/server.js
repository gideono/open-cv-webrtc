import path     from 'path'
import express  from 'express'
import http     from 'http'
import SocketIO from 'socket.io'

const app = express()
    , server = http.Server(app)
    , socket = new SocketIO(server);

app.use(express.static(path.join(__dirname, '../frontend')));


server.listen(8080, () => console.log(`PORT: ${server.address().port}`));