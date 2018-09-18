 export const asyncBlobToBuffer = (blob) => new Promise((resolve, reject) => {
    const onLoad = (reader) => {
        reader.onload = () => resolve(reader.result);
        return reader
    };

    const onError = (reader) => {
        reader.onerror = () => { reader.abort(); reject(new DOMException("Unable to create buffered array.")); };
        return reader;
    };

    [new FileReader()]
        .map(onLoad)
        .map(onError)
        .map(reader => reader.readAsArrayBuffer(blob));
});