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
        <div className="grey-overlay">
            <div className="account-order-details">
                <div className="box1">
                    <div className="items-box">
                        {items}
                    </div>

                </div>
                <div className="box2">
                    <span className="bold">Order ID</span>
                    <span className="light">#{order.id}</span>
                    <span className="bold">Total amount</span>
                    <span className="light">{itemAmount}</span>
                    <span className="bold">Status</span>
                    <span className="light">{order.status}</span>
                    <span className="bold">Dispatch</span>
                    <span className="light">{order.dispatch}</span>
                    {order.status === "PENDING" ? <div>
                        <button className="button2 v3" onClick={() => onDelete(order.id)}>Delete</button>
                    </div>: ''}
                </div>
            </div>
        </div>
    );
};
export default OrderJoinedSuperorder;
