import * as React from 'react';

const OrderMySuperorder = ({ order, onStatusChange }) => {

    const items = order.orderItems.map((orderItem) => {
        return (
            <div className="order-item" key = {orderItem.id}>
                <span className="item-link">{orderItem.url}</span>
                <span>{orderItem.additionalInfo}</span>
                <span>Amount {orderItem.quantity}</span>
            </div>
        );
    });

    return (
            <div className="setorder-orders">
              <div className="setOrder-orders-brief">
                <div className="box1">
                  <div><span className="inner">From {order.user.firstName + ' ' + order.user.lastName}<img className="avatar inner" src={order.user.imageUrl} alt="avatar" /></span><span className="inner">#{order.id}</span></div>
                  <div><span>{order.dispatch}</span><span>{order.status}</span>{order.isDeleted ? <span className="error">Deleted</span> : ''}</div>
                </div>
              </div>

              {items}

              {order.status === "PENDING" ?
                  <div>
                      <button className="button2" onClick={() => {onStatusChange(order.id, "ACCEPTED")}} >Accept</button>
                      <button className="button2 v2" onClick={() => {onStatusChange(order.id, "REFUSED")}} >Refuse</button>
                  </div>
              : ''}

            </div>
    );
};
export default OrderMySuperorder;
