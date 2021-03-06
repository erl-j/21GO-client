import * as React from "react";
import closeIcon from '../../../img/icons/close.svg';
import emailIcon from '../../../img/icons/email.svg';
import phoneIcon from '../../../img/icons/phone.svg';
import boxIcon from '../../../img/icons/box.svg';

const UserOrderDetails = ({goBack, superorder, onDelete}) => {

    if(!superorder){
        return (
            <div className="grey-overlay">
                <div className="account-order-details">
                    <img className="close" src={closeIcon} alt="Close" onClick={goBack}/>
                    <div className="box1">This order doesn't exist anymore</div>
                </div>
            </div>
        );
    }

    const order = superorder.myOrder;
    let itemAmount = 0;

    const items = order.orderItems.map((orderItem) => {
        itemAmount += orderItem.quantity;
        return (
            <div className="order-item" key={orderItem.id}>
                <span className="item-link">{orderItem.url}</span>
                <div><span>{orderItem.additionalInfo}</span><span>Amount {orderItem.quantity}</span></div>
            </div>
        );
    });

    let deleteStatus: any = '';
    if (order.isDeleted) {
        deleteStatus = <div><h4 className="error">Deleted by me</h4></div>;
    } else if (superorder.isDeleted) {
        deleteStatus = <div><h4 className="error">Deleted by initiator</h4></div>;
    } else if (order.status === "PENDING") {
        deleteStatus = <div>
            <button className="button2 v3" onClick={() => onDelete(order.id)}>Delete</button>
        </div>;
    }

    return (
        <div className="grey-overlay">
            <div className="account-order-details">
                <img className="close" src={closeIcon} alt="Close" onClick={goBack}/>
                <div className="box1">
                    <div className="items-box">
                        {items}
                    </div>
                    <div className="superorder-box semi-bold">
                        <div className="vertical-center"><span
                            className="inner">From {superorder.user.firstName + " " + superorder.user.lastName}</span><img
                            className="avatar inner" src={superorder.user.imageUrl} alt="avarar"/><img
                            className="emailIcon inner" src={emailIcon} alt="Email"/><img className="phoneIcon inner"
                                                                                          src={phoneIcon} alt="Phone"/>
                        </div>
                        <span>Superorder #{superorder.id}</span><br/>
                        <div className="vertical-center"><img className="boxIcon inner" src={boxIcon}
                                                              alt="Ship location"/><span
                            className="inner">{superorder.arrivalLocation}</span></div>
                        <span>{'From ' + superorder.createdAt.substring(0, 10) + ' to ' + superorder.deadline.substring(0, 10)}</span>
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
                    {deleteStatus}
                </div>
            </div>
        </div>
    );
};

export default UserOrderDetails;
