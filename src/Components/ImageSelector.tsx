import * as React from 'react';
import {CSSProperties, SetStateAction, useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";
import {uploadImage} from "../helpers/uploadImage";

const thumbsContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    border: '1px solid black',
};

const thumb:  CSSProperties  = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const msg:  CSSProperties  = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner:  CSSProperties  = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img: CSSProperties  = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const preview = "preview";

function ImageSelector(props) {

    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        multiple:false,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map((file:File) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })) as SetStateAction<never[]>);
        }
    });

    const thumbs = files.map((file: File) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file[preview]}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach((file: File) => URL.revokeObjectURL(file[preview]));
    }, [files]);


    const submitHandler = () => {

        const file = files[0];
        if(file == null){
            alert("must select a file");
            return;
        }

        uploadImage(file).then((res) => {
            console.log(res);
            const url = res.secure_url;
            props.clickHandler(url);

        }).catch((err) => {
            console.log(err);
        });

    };

    return (
        <div>
        <section className="container" style={thumbsContainer}>
                <div style={msg}{...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop your image here, or click to select it</p>
                </div>
                {thumbs}
        </section>

        <button className="button2" type="button" onClick={submitHandler}>  Submit </button>
        </div>
);
}

export default ImageSelector;
