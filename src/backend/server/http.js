import   path                from "path"
import   express             from "express"
import   http                from "http"
import { DEFAULT_HTTP_PORT } from "../constants"
import { STATIC_PATH }       from "../constants"
import { identify } from '../service/detection';

const app     = express();
const server  = http.Server(app);

app.use(
  express.static(
    path.join(`${__dirname}/../`, STATIC_PATH)
  )
);

function start(port = DEFAULT_HTTP_PORT) {
  server.listen(port, () => console.log(`PORT: ${port}`));
}

function withWebSocket(WebSocket) {
    instantiateSocket(WebSocket)
      .on('connection', (session, req) => {
          const { connection: { remoteAddress } } = req
              , ip = remoteAddress === '::1' ? '0.0.0.0' : remoteAddress;

          console.log(`connection established from: ${ip}`);
          session.on('message', (blob) => session.send(identify(blob)));
          session.on('close', () => console.log(`${ip} has disconnected`));
          session.on('error', (e) => console.log(`caused by, ${ip}`, e));
      });
  return { start }
}

function instantiateSocket(WebSocket) {
    return new WebSocket.Server({ server });
}

export default { start, withWebSocket }
