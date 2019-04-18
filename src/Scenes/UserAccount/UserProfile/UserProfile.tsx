import * as React from "react";
import {uploadImage} from "../../../helpers/uploadImage";
import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";
import ImageSelector from "../../../Components/ImageSelector";

const UserProfile = (props) => {

    const {user} = props;

    return (
      <React.Fragment>
        <div className="profile">
          <div className="box1">
            <h2 className="bold">Username</h2>
            <h2 className="light">{user.username}</h2>
            <h2 className="bold">First Name</h2>
            <h2 className="light">{user.firstName}</h2>
            <h2 className="bold">Last Name</h2>
            <h2 className="light">{user.lastName}</h2>
            <h2 className="bold">Email</h2>
            <h2 className="light">{user.email}</h2>
            <h2 className="bold">Phone</h2>
            <h2 className="light">{user.phone}</h2>
            <h2 className="bold">Location</h2>
            <h2 className="light">{user.location}</h2>
          </div>
          <div className="box2">
            <div className="container"><img src={user.imageUrl} alt="Avatar" /></div>
          </div>
        </div>
          <ImageSelector clickHandler={uploadHandler}/>

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
