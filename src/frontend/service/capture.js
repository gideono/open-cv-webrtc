import device from '../utility/media-device'
import constraint from '../utility/rtc-constraint'
import io from '../communication/socket-client'

setTimeout(() => {
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');

    device(constraint).then(stream => {
        video.srcObject = stream;
        setInterval(() => {
            canvas.getContext('2d', {}).drawImage(video, 0, 0, 640, 480);
            canvas.toBlob((blob) => io.send(blob), 'image/jpg', 1);
        }, 115)
    });
}, 100);
