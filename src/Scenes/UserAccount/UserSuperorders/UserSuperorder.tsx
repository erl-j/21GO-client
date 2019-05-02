import * as React from "react";
import UserSuperorderOrders from "./UserSuperorderOrders";

const UserSuperorder = (props) => {

    const superorder = props.superorder;
    const keyId = "id";
    const orderList = superorder.orders.map((order) => <UserSuperorderOrders order = {order} key = {order[keyId]} /> );

    const currentTime = new Date();
    console.log(currentTime);

    return (
        <React.Fragment>
          <div className="account-superorders" >
  					<div className="account-items semi-bold">
  						<div className="box1">
  							<img className="item-img" src={superorder.imageUrl} alt="" />
  						</div>
  						<div className="box2">
  							<span>{superorder.storeName + ' ' + superorder.storeLocation}</span>
  							<span>#{superorder.id}</span>
  							<span>{'From ' + superorder.createdAt.substring(0, 10) + ' to ' + superorder.deadline.substring(0, 10)}</span>
  						</div>
  						<div className="box3">
  							<span>{orderList.length} Orders</span>
  							<span>{superorder.dispatch}</span>
  							<span>{currentTime < new Date(superorder.deadline) ? 'On going' : 'Passed'}</span>
  						</div>
  					</div>
  				</div>
            <h1>ID {superorder.id}</h1>
            <h1>Store URL {superorder.storeURL}</h1>
            <h1>Store Location {superorder.storeLocation}</h1>
            <h1>Deadline {superorder.deadline}</h1>
            <h1>Arrival Location {superorder.arrivalLocation}</h1>
            <h1>Available Dispatch {superorder.availableDispatch}</h1>
            <h1>Store Name {superorder.storeName}</h1>
            <h1>Tags {superorder.tags}</h1>
            <h1>Created At {superorder.createdAt}</h1>
            <h1>Is Deleted {superorder.isDeleted}</h1>
            {orderList}
        </React.Fragment>
    );


};

export default UserSuperorder;
