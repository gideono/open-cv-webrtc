const url = `ws://localhost:8080/`;
const io = new WebSocket(url);
io.onopen = () => console.log(`established connection to: ${url}`);
// TODO on message need to handle messages with different return type to avoid error message
io.onmessage = ({data}) => (document.querySelector('img').src = URL.createObjectURL(data));
io.onclose = (e) => console.log(e);
io.onerror = (err) => console.log(err);

export default io;