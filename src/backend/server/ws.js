import   http              from "http"
import   express           from "express"
import   WebSocket         from "ws"
import { DEFAULT_WS_PORT } from "../constants"

const app    = express();
const server = http.Server(app);
const io     =  new WebSocket.Server({ server });

io.on('connection', (session, req) => {

    const { connection: { remoteAddress } } = req
        , ip = remoteAddress === '::1' ? '0.0.0.0' : remoteAddress;

    console.log(`connection established from: ${ip}`);
    // session.on('message', (blob) => session.send(identify(blob)));
    session.on('close', () => console.log(`${ip} has disconnected`));
    session.on('error', (e) => console.log(`caused by, ${ip}`, e));
});

export function start(port = DEFAULT_WS_PORT) {
  server.listen(port, () => console.log(`PORT: ${port}`));
}
