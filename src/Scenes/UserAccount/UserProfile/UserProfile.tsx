import * as React from "react";
import ImageSelector from "../../../Components/ImageSelector";

const UserProfile = (props) => {

    const {user, uploadHandler} = props;

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
            <h2 className="light">{user.mail}</h2>
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

export default UserProfile;
