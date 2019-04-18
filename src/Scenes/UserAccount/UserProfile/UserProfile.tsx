import * as React from "react";
import UserUploadedImage from "../../../Components/UserUploadedImage";

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
            <UserUploadedImage url={user.imageUrl}/>

        </React.Fragment>
    );

};

export default UserProfile;