export function uploadImage(file) {
    const cloudName = 'twango';
    const unsignedUploadPreset = 'en7d9aak';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload');
    fd.append('file', file);

    const options = {
        method: 'POST',
        body: fd,
    };

    return fetch(url, options).then(handleErrors)
        .then(res => res.json());
}

function handleErrors(response: any) {
    if (!response.ok) {
        console.log(response);
        throw Error(response.statusText);
    }
    return response;
}

