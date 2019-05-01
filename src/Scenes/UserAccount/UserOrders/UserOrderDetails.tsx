import * as React from "react";
import closeIcon from '../../../img/icons/close.svg';
import avatar from '../../../img/user1.jpg';
import emailIcon from '../../../img/icons/email.svg';
import phoneIcon from '../../../img/icons/phone.svg';
import boxIcon from '../../../img/icons/box.svg';

const UserOrderDetails = () => {
  return (
    <React.Fragment>
      <div className="grey-overlay">
        <div className="account-order-details">
          <img className="close" src={closeIcon} alt="Close"/>
          <div className="box1">
            <div className="items-box">
              <div className="order-item">
                <span className="item-link">https://www.kikocosmetics.com/it-it/make-up/labbra/Unlimited-Double-Touch-101/p-KM0020102310144</span>
                <div><span>Details</span><span>Amount ?</span></div>
              </div>
            </div>
            <div className="superorder-box semi-bold">
              <div className="vertical-center"><span className="inner">From username</span><img className="avatar inner" src={avatar} alt="avarar"/><img className="emailIcon inner" src={emailIcon} alt="Email" /><img className="phoneIcon inner" src={phoneIcon} alt="Phone" /></div>
              <span>Superorder #ID</span><br />
              <div className="vertical-center"><img className="boxIcon inner" src={boxIcon} alt="Ship location" /><span className="inner">Country</span></div>
              <span>Date</span>
            </div>
          </div>
          <div className="box2">
            <h4 className="bold">Order ID</h4>
            <h4 className="light">#ID</h4>
            <h4 className="bold">Status</h4>
            <h4 className="light">Accepted</h4>
            <h4 className="bold">Dispatch</h4>
            <h4 className="light">Chosen one</h4>
            <h4 className="bold">Address</h4>
            <h4 className="light">Awtwehr St 65, SE - 100 00, Stockholm, Sweden</h4>
            <button className="button2 v3">Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserOrderDetails;
