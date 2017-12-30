export const recorder = (stream, opts = {}) => new MediaRecorder(stream, opts);

export const setup = (stream, opts) => {
    const media = recorder(stream, opts);
    return (onDataAvailable) => {
        media.ondataavailable = onDataAvailable;
        return media;
    }
};