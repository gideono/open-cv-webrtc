import adapter from 'webrtc-adapter'

export default (constraint) => {
    if (!constraint)
        throw new Error('no constraint object was provided');

    return navigator.mediaDevices.getUserMedia(constraint)
}