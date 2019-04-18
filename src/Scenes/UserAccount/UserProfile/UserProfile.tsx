import * as React from "react";
import UserUploadedImage from "../../../Components/UserUploadedImage";
import {uploadImage} from "../../../helpers/uploadImage";
import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

const UserProfile = (props) => {

    const {user} = props;

    return (
        <React.Fragment>
            <h1>Username {user.username}</h1>
            <h1>First Name {user.firstName}</h1>
            <h1>Last Name {user.lastName}</h1>
            <h1>Email {user.email}</h1>
            <h1>Phone {user.phone}</h1>
            <h1>Location {user.location}</h1>
            <UserUploadedImage url={user.imageUrl} uploadHandler={uploadHandler}/>
        </React.Fragment>
    );

};

const uploadHandler = (files) => {
    const file = files[0];
    if(file == null){
        alert("must select a file");
        return;
    }

    uploadImage(file).then((res) => {
        console.log(res);
        const url = res.secure_url;
        const attributes = {
            "username": null,
            "firstName": null,
            "lastName": null,
            "mail": null,
            "location": null,
            "phone": null,
            "imageUrl": url
        };

        APICall(Method.PUT, "/user/profile", attributes, loadJwt()).then((res2) => {
            console.log(res2);
        });

    }).catch((err) => {
        console.log(err);
    });

};

export default UserProfile;