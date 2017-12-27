import device from '../utility/media-device'

const url = `ws://localhost:8080/`;
const io = new WebSocket(url);
io.onopen = () => console.log(`established connection to: ${url}`);
io.onmessage = ({data}) => console.log(data);
io.onclose = (e) => console.log(e);
io.onerror = (err) => console.log(err);

const constraint = {video: {mandatory: {minWidth: 640, minHeight: 480}}};
setTimeout(() => {
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');

    device(constraint).then(stream => {
        video.srcObject = stream;
        setInterval(() => {
            canvas.getContext('2d', {}).drawImage(video, 0, 0, 640, 480);

            //OBS! needs to be in jpeg
            canvas.toBlob((blob) => io.send(blob));
        }, 5000)
    });
}, 100);
