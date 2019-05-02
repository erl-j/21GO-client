import * as React from 'react';

const OrderMySuperorder = ({ order, onStatusChange }) => {
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
            <div className="account-order-details">
                <div className="box1">
                    <div className="items-box">
                        {items}
                    </div>

                </div>

                <div className="box2">
                    <h4 className="bold">Order ID</h4>
                    <h4 className="light">#{order.id}</h4>
                    <h4 className="bold">Total amount</h4>
                    <h4 className="light">{itemAmount}</h4>
                    <h4 className="bold">Status</h4>
                    <h4 className="light">{order.status}</h4>
                    <h4 className="bold">Dispatch</h4>
                    <h4 className="light">{order.dispatch}</h4>

                    {order.status === "PENDING" ?
                        <div>
                            <button className="button2 v3" onClick={() => {onStatusChange(order.id, "ACCEPTED")}} >ACCEPT</button>
                            <button className="button2 v3" onClick={() => {onStatusChange(order.id, "REFUSED")}} >REFUSE</button>
                        </div>
                    : ''}

                </div>

            </div>
    );
};
export default OrderMySuperorder;
