import   path                from "path"
import   express             from "express"
import   http                from "http"
import { DEFAULT_HTTP_PORT } from "../constants"
import { STATIC_PATH }       from "../constants"

const app     = express();
const server  = http.Server(app);

app.use(
  express.static(
    path.join(`${__dirname}/../`, STATIC_PATH)
  )
);

export function start( port = DEFAULT_HTTP_PORT) {
  server.listen(port, () => console.log(`PORT: ${port}`));
}
