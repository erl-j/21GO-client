import * as React from "react";

const UserSuperordersOrders = (props) => {

    const {order} = props;

    let items = order.orderItems.map((item) => <UserSuperordersOrdersOrderItem orderItem ={item}/> );

    return (

        <React.Fragment>
            <h1>ID {order.id}</h1>
            <h1>Dispatch {order.dispatch}</h1>
            <h1>Status {order.status}</h1>
            <h1>Is Deleted {order.isDeleted}</h1>
            <UserSuperordersOrdersUser user={order.user}/>
            {items}
        </React.Fragment>
    );

};

export default UserSuperordersOrders;

const UserSuperordersOrdersOrderItem = (props) => {

    const {orderItem} = props;

    return (
        <React.Fragment>
            <h1>ID {orderItem.id}</h1>
            <h1>Additional Info {orderItem.additionalInfo}</h1>
            <h1>Quantity {orderItem.quantity}</h1>
        </React.Fragment>
    );

};

const UserSuperordersOrdersUser = (props) => {

    const {user} = props;

    return (
        <React.Fragment>
            <h1>ID {user.id}</h1>
            <h1>First Name {user.firstName}</h1>
            <h1>Last Name {user.lastName}</h1>
            <h1>Image URL{user.imageUrl}</h1>
        </React.Fragment>
    );


};