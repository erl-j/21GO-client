import * as React from "react";
import UserSuperorderOrders from "./UserSuperorderOrders";

const UserSuperorder = (props) => {

    const superorder = props.superorder;
    console.log(superorder);
    const keyId = "id";
    const orderList = superorder.orders.map((order) => <UserSuperorderOrders order = {order} key = {order[keyId]} /> );

    return (
        <React.Fragment>
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