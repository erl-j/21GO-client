import * as React from 'react';


const OrderJoinedSuperorder = ({ order, onDelete }) => {
    let itemAmount = 0;

    const items = order.orderItems.map((orderItem) => {
        itemAmount += orderItem.quantity;
        return (
            <div className="order-item" key = {orderItem.id}>
                <span className="item-link">{orderItem.url}</span>
                <div><span>{orderItem.additionalInfo}</span><span>Amount {orderItem.quantity}</span></div>
            </div>
        );
    });

    return (
            <div className="setOrder-orders">
              <div className="setOrder-orders-brief semi-bold">
                <div className="box1">
                  <div><span className="inner">#{order.id}</span><span className="inner">{itemAmount}</span></div>
                  <div><span>{order.dispatch}</span><span>{order.status}</span>{order.isDeleted ? <span className="error">Deleted</span> : ''}</div>
                </div>
              </div>
              {items}
              {order.status === "PENDING" ?
                <button className="button2 v3" onClick={() => onDelete(order.id)}>Delete</button>
              : ''}
            </div>
    );
};
export default OrderJoinedSuperorder;
