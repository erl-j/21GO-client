import * as React from 'react';
import im from './im1.jpg';
import avatar from '../img/user1.jpg';
import emailIcon from '../img/icons/email.svg';
import boxIcon from '../img/icons/box.svg';

const SuperorderInspect = (props) => {
	let display;
	if(props.user){
		display=(
			<div className="superorder">
				<img className="superorder-img" src={im} alt="Superorder image" />
				<div className="superorder-info">
					<h3 className="bold"><span className="uppercase">{props.storeName}</span>{", " + props.storeLocation}</h3>
					<img className="avatar" src={avatar} alt="avatar"/>
					{/* <img src={props.user.imageUrl} alt="avatar"/>*/}
					<img className="emailIcon" src={emailIcon} alt="Email" /><br />
					<span>Initiated by {props.user.firstName + " " + props.user.lastName}</span><br />
					<img className="boxIcon" src={boxIcon} alt="Ship location" />
					<span>{props.arrivalLocation}</span><br />
					<span>Ends in {dateDiffInDays(new Date(), new Date(props.deadline))} days - {props.deadline.substring(0, 10)}</span><br />
					<span>{props.availableDispatch}</span><br />
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					{/*<ul>
						{
							Object.keys(props).map(ent=>
							<li key={ent}>{ent+":"+props[ent]}</li>
						)}
					</ul>*/}
				</div>
			</div>
		)
	}
	else{
		display="";
	}
	return display;
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
