const url = `ws://localhost:8080/`;
const io = new WebSocket(url);
io.onopen = () => console.log(`established connection to: ${url}`);
io.onmessage = ({data}) => (document.querySelector('img').src = URL.createObjectURL(data));
io.onclose = (e) => console.log(e);
io.onerror = (err) => console.log(err);

export default io;