import * as React from "react";
import closeIcon from '../../../img/icons/close.svg';
import boxIcon from '../../../img/icons/box.svg';
import UserSuperorderOrders from "./UserSuperorderOrders";

const UserSuperorderDetails = ({goBack, superorder, onDelete, onStatusChange}) => {
    if(!superorder){
        return (
            <div className="grey-overlay">
                <div className="account-superorder-details">
                    <img className="close" src={closeIcon} alt="Close" onClick={goBack}/>
                    <div className="box1"> This superorder doesn't exist anymore</div>
                </div>
            </div>
        );
    }

    const orderList = superorder.orders.map((order) => <UserSuperorderOrders
        onStatusChange={onStatusChange} order={order} key={order.id!}/>);

    const tagsStr = superorder.tags
        ? superorder.tags.reduce((previous, el) => (previous + (previous !== "" ? ", " : "") + el), "")
        : "";

    return (
        <div className="grey-overlay">

            <div className="account-superorder-details">
                <img className="close" src={closeIcon} alt="Close" onClick={goBack}/>

                <div className="superorder-info semi-bold">

                    <span>#{superorder.id + ' '}
                        <a href={superorder.storeURL} target="_blank">{superorder.storeName}</a>
                        {", " + superorder.storeLocation}
                    </span>
                    <br/>

                    <a href={superorder.storeURL} target="_blank"><span>{superorder.storeURL}</span></a>
                    <br/>

                    <span>{'From ' + superorder.createdAt.substring(0, 10) + ' to ' + superorder.deadline.substring(0, 10)}</span>
                    <br/>

                    <img src={boxIcon} alt="Ship location"/><span>{superorder.arrivalLocation}</span>
                    <br/>

                    <span>{superorder.availableDispatch === 'BOTH' ? 'PICKUP / DELIVERY' : superorder.availableDispatch}</span>
                    <br/>

                    <span>Tags: {tagsStr}</span>
                    <br/>

                    {superorder.isDeleted
                        ? <span className="error">Deleted</span>
                        : <button className="button2" onClick={() => onDelete(superorder.id)}>Delete</button>}
                </div>


                <div className="superorder-orders">
                    {orderList}
                </div>
            </div>
        </div>
    );
};

export default UserSuperorderDetails;
