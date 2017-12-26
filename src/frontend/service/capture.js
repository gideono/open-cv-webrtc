import device from '../utility/media-device'

const constraint = {video: {mandatory: {minWidth: 640, minHeight: 480}}};
setTimeout(() => {
    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');
    device(constraint).then(stream => {
        video.srcObject = stream;
        setInterval(() => {
            canvas.getContext('2d', {}).drawImage(video, 0, 0, 640, 480);
            canvas.toBlob((blob) => console.log(blob));
        }, 100)
    });

}, 100);
