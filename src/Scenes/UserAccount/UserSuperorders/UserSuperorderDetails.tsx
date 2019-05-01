import * as React from "react";
import closeIcon from '../../../img/icons/close.svg';
import boxIcon from '../../../img/icons/box.svg';
import downIcon from '../../../img/icons/down.svg';

const UserSuperorderDetails = ({goBack}) => {

  return (
    <div className="grey-overlay">
      <div className="account-superorder-details">
        <img className="close" src={closeIcon} alt="Close" onClick={goBack}/>
        <div className="superorder-info semi-bold">
          <span>#ID</span><span>StoreName, storeLocation</span><br />
          <span>Url</span><br />
          <span>Duration</span><br />
          <img src={boxIcon} alt="Ship location" /><span>Country</span><br />
          <span>Dispatch</span><br />
          <span>Tags: </span>
        </div>
        <div className="superorder-orders">
          <div className="superorder-order-info">
            <div className="superorder-order-brief">
              <div className="box1">
                <div><span>From Name #ID</span><span>Date</span></div>
                <div><span>? Items</span><span>Dispatch</span><span>Status</span></div>
                <span>Address</span>
                <div className="accept-reject"><button className="button2">Accept</button><button className="button2 v2">Reject</button></div>
              </div>
              <img src={downIcon} alt="See order items" />
            </div>
          </div>
          <div className="superorder-order-info">
            <div className="superorder-order-brief">
              <div className="box1">
                <div><span>From Name #ID</span><span>Date</span></div>
                <div><span>? Items</span><span>Dispatch</span><span>Status</span></div>
                <span>Address</span>
              </div>
              <img src={downIcon} alt="See order items" />
            </div>
          </div>
          <div className="superorder-order-info">
            <div className="superorder-order-brief">
              <div className="box1">
                <div><span>From Name #ID</span><span>Date</span></div>
                <div><span>? Items</span><span>Dispatch</span><span>Status</span></div>
                <span>Address</span>
              </div>
              <img src={downIcon} alt="See order items" />
            </div>
          </div>
          <div className="superorder-order-info">
            <div className="superorder-order-brief">
              <div className="box1">
                <div><span>From Name #ID</span><span>Date</span></div>
                <div><span>? Items</span><span>Dispatch</span><span>Status</span></div>
                <span>Address</span>
              </div>
              <img src={downIcon} alt="See order items" />
            </div>
          </div>
          <div className="superorder-order-info">
            <div className="superorder-order-brief">
              <div className="box1">
                <div><span>From Name #ID</span><span>Date</span></div>
                <div><span>? Items</span><span>Dispatch</span><span>Status</span></div>
                <span>Address</span>
              </div>
              <img src={downIcon} alt="See order items" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSuperorderDetails;
