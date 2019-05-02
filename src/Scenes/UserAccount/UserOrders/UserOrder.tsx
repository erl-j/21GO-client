import * as React from "react";
const UserOrder = (props) => {

    const superorder = props.superorder;
    const order = superorder.myOrder;
    let itemAmount = 0;

    const items = order.orderItems.map((orderItem) => {
      itemAmount += orderItem.quantity;
      // return (
      //   <div key = {orderItem.id}>
      //       <h3>ID {orderItem.id}</h3>
      //       <h3>Additional Info {orderItem.additionalInfo}</h3>
      //       <h3>Quantity {orderItem.quantity}</h3>
      //   </div>
      // );
      return '';
    });

    return (
        <React.Fragment>
					<div className="account-item semi-bold" onClick={props.seeDetails}>
						<div className="box1">
							<img className="item-img" src={superorder.imageUrl} alt="Superorder image" />
						</div>
						<div className="box2">
							<span>{superorder.storeName + ", " + superorder.storeLocation}</span>
							<span>#{order.id}</span>
							<span>From {superorder.user.firstName + " " + superorder.user.lastName}</span>
						</div>
						<div className="box3">
							<span>{itemAmount} {itemAmount > 1 ? 'Items' : 'Item'}</span>
							<span>{order.dispatch}</span>
							<span>{order.status}</span>
              {order.isDeleted ? <span className="error">Deleted by me</span> : superorder.isDeleted ? <span className="error">Deleted by initiator</span> : ''}
						</div>
					</div>
          {items}
        </React.Fragment>
    );

};

export default UserOrder;
