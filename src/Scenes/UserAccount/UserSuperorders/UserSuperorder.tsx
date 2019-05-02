import * as React from "react";

const UserSuperorder = (props) => {

    const superorder = props.superorder;

    const currentTime = new Date();
    console.log(currentTime);

    return (
        <React.Fragment>
					<div className="account-item semi-bold" onClick={props.seeDetails}>
						<div className="box1">
							<img className="item-img" src={superorder.imageUrl} alt="" />
						</div>
						<div className="box2">
              <span><a href={superorder.storeURL} target="_blank">{superorder.storeName}</a>{", " + superorder.storeLocation}</span>
							<span>#{superorder.id}</span>
							<span>{'From ' + superorder.createdAt.substring(0, 10) + ' to ' + superorder.deadline.substring(0, 10)}</span>
						</div>
						<div className="box3">
							<span>{superorder.orders.length} Orders</span>
							<span>{superorder.dispatch}</span>
							<span>{currentTime < new Date(superorder.deadline) ? 'On going' : 'Passed'}</span>
              {superorder.isDeleted ? <span className="error">Deleted</span> : ''}
						</div>
					</div>
        </React.Fragment>
    );


};

export default UserSuperorder;
