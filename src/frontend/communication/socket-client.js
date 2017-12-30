const defaultURL = `ws://localhost:8080/`;

export class Socket {
    constructor(build) {
        this.socket = build
    }
    static get IO() {
        class IO {
            constructor(url = defaultURL) {
                this.socket = new WebSocket(url);
            }
            setOnOpen(open) {
                this.socket.onopen = open;
                return this
            }
            setOnMessage(message) {
                this.socket.onmessage = message;
                return this
            }
            setOnClose(close) {
                this.socket.onclose = close;
                return this
            }
            setOnError(error) {
                this.socket.onerror = error;
                return this
            }
            build() {
                return this.socket;
            }
        }
        return IO;
    }
}

export const SimpleSocket = (message = onmessage) => {
    return new Socket.IO()
        .setOnOpen(onopen)
        .setOnMessage(message)
        .setOnClose(onclose)
        .setOnError(onerror)
        .build();
};

const onopen = () => console.log(`established connection to: ${defaultURL}`);
const onmessage = ({data}) => handleData(data);
const onclose = (e) => console.log(e);
const onerror = (err) => console.log(err);

const handleData = (data) => {
    if(data instanceof Blob){
        // Todo,should take ref node, not dom element
        // Todo update redux store should propagate changes to blob url and consumed by component
        document.querySelector('img').src = URL.createObjectURL(data);
    }
    if(data instanceof String) {
        console.log(data)
    }

    //TODO fix switch statement
    // switch(data) {
    //     case data instanceof Blob:
    //
    //          document.querySelector('img').src = URL.createObjectURL(data);
    //         break;
    //     case data instanceof String:
    //         console.log(data);
    //         break;
    //     default:
    //         console.log('unhandled data type');
    // }
};