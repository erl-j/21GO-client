import * as React from 'react';
import im from './im1.jpg';
import avatar from '../img/user1.jpg';
import emailIcon from '../img/icons/email.svg';
import boxIcon from '../img/icons/box.svg';

const SuperorderInspect = ({superorder}) => {
	console.log(superorder);

	if(!superorder || Object.keys(superorder).length === 0){
		console.log("nope");
		return null;
	}

	return (<div className="superorder">
				<img className="superorder-img" src={im} alt="Superorder image" />
				<div className="superorder-info">
					<h3 className="bold">
						<span className="uppercase">{superorder.storeName}</span>
						{", " + superorder.storeLocation}
					</h3>
					<img className="avatar" src={avatar} alt="avatar"/>
					{/* <img src={superorder.user.imageUrl} alt="avatar"/>*/}
					<img className="emailIcon" src={emailIcon} alt="Email" /><br />
					<span>Initiated by {superorder.user.firstName + " " + superorder.user.lastName}</span><br />
					<img className="boxIcon" src={boxIcon} alt="Ship location" />
					<span>{superorder.arrivalLocation}</span><br />
					<span>Ends in {dateDiffInDays(new Date(), new Date(superorder.deadline))} days -
						{superorder.deadline.substring(0, 10)}</span><br />
					<span>{superorder.availableDispatch}</span><br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
						in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>);

};

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
	// Discard the time and time-zone information.
	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export default SuperorderInspect;
