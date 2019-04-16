import * as React from "react";

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
        </React.Fragment>
    );


}

export default UserProfile;