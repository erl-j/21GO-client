import * as React from "react";
import UserSuperordersOrders from "./UserSuperordersOrders";

const UserSuperorder = (props) => {

    const {superOrder} = props;
    const orderList = superOrder.orders.map((order) => <UserSuperordersOrders order ={order}/> );

    return (
        <React.Fragment>
            <h1>ID {superOrder.id}</h1>
            <h1>Store URL {superOrder.storeURL}</h1>
            <h1>Store Location {superOrder.storeLocation}</h1>
            <h1>Deadline {superOrder.deadline}</h1>
            <h1>Arrival Location {superOrder.arrivalLocation}</h1>
            <h1>Available Dispatch {superOrder.availableDispatch}</h1>
            <h1>Store Name {superOrder.storeName}</h1>
            <h1>Tags {superOrder.tags}</h1>
            <h1>Created At {superOrder.createdAt}</h1>
            <h1>Is Deleted {superOrder.isDeleted}</h1>
            {orderList}
        </React.Fragment>
    );


};

export default UserSuperorder;