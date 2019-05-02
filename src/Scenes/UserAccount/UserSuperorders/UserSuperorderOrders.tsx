import * as React from "react";

const UserSuperorderOrders = ({order, onStatusChange}) => {

    const keyId = "id";
    const items = order.orderItems.map((item) => <UserSuperordersOrdersOrderItem orderItem ={item} key={item[keyId]}/> );

    return (
      <div className="superorder-order-info">
        <div className="superorder-order-brief">
          <div className="box1">
            <div><span className="inner">From {order.user.firstName + ' ' + order.user.lastName}<img className="avatar inner" src={order.user.imageUrl} alt="avatar" /></span><span className="inner">#{order.id}</span></div>
            <div><span>{order.dispatch}</span><span>{order.status}</span>{order.isDeleted ? <span className="error">Deleted</span> : ''}</div>
          </div>
        </div>
        {items}
        {order.status === 'PENDING' ?
            <div className="accept-refuse">
                <button className="button2" onClick={() => onStatusChange(order.id, "ACCEPTED")}>Accept</button>
                <button className="button2 v2" onClick={() => onStatusChange(order.id, "REFUSED")}>Refuse</button>
            </div> : ''}
      </div>
    );
};

export default UserSuperorderOrders;

const UserSuperordersOrdersOrderItem = ({orderItem}) => {

  return (
    <div className="superorder-order-item">
      <span>{orderItem.url}</span>
      <span>{orderItem.additionalInfo}</span>
      <span>Amount {orderItem.quantity}</span>
    </div>
  );
};
