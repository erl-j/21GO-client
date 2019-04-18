import * as React from "react";
import UserUploadedImage from "../../../Components/UserUploadedImage";

const UserProfile = (props)=>{

    const {username,email,phoneNumber,address}=props;

    return (
        <React.Fragment>
            <div>
            <span className="label">Username</span>
            <br/>
            {username}
            </div>
            
            <h1>Email{email}</h1>
            <h1>Phone{phoneNumber}</h1>
            <h1>Address{address}</h1>
            <UserUploadedImage url="http://hdwpro.com/wp-content/uploads/2016/08/Animal-Crazy-Funny-Pics.jpg"/>
        </React.Fragment>
    );


}

export default UserProfile;