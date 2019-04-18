import * as React from "react";
import UserUploadedImage from "../../../Components/UserUploadedImage";
// import avatar from "../../../img/user1.jpg"

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
            <img src={user.imageUrl} alt="Avatar" />
          </div>
        </div>
        <UserUploadedImage url={user.imageUrl}/>
      </React.Fragment>
    );

};

export default UserProfile;
