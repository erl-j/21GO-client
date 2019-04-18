import * as React from "react";

const UserOrder = (props) => {

    const superorder = props.superorder;
    const order = superorder.myOrder;

    const items = order.orderItems.map((orderItem) =>
        <div key = {orderItem.id}>
            <h3>ID {orderItem.id}</h3>
            <h3>Additional Info {orderItem.additionalInfo}</h3>
            <h3>Quantity {orderItem.quantity}</h3>
        </div>
    );

    return (
        <React.Fragment>
            <h3>ID {superorder.id}</h3>
            <h3>Store URL {superorder.storeURL}</h3>
            <h3>Store Location {superorder.storeLocation}</h3>
            <h3>Deadline {superorder.deadline}</h3>
            <h3>Arrival Location {superorder.arrivalLocation}</h3>
            <h3>Available Dispatch {superorder.availableDispatch}</h3>
            <h3>Store Name {superorder.storeName}</h3>
            <h3>Tags {superorder.tags}</h3>
            <h3>Created At {superorder.createdAt}</h3>
            <h3>Is Deleted {superorder.isDeleted}</h3>

            <h2>My Order</h2>

            <React.Fragment>
                <h3>ID {order.id}</h3>
                <h3>Dispatch {order.dispatch}</h3>
                <h3>Status {order.status}</h3>
                <h3>Is Deleted {order.isDeleted}</h3>
                {items}
            </React.Fragment>

        </React.Fragment>
    );

};

export default UserOrder;