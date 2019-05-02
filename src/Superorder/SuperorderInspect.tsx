import * as React from 'react';
import emailIcon from '../img/icons/email.svg';
import boxIcon from '../img/icons/box.svg';

const SuperorderInspect = ({superorder}) => {

	if(!superorder || Object.keys(superorder).length === 0){
		return null;
	}

	let i = 1;
	let tagsStr = '';
	if(superorder.tags) {
		tagsStr = " " + superorder.tags[0];
	}
	for(; i < superorder.tags.length; i++) {
		tagsStr = tagsStr + ", " + superorder.tags[i];
	}

	return (<div className="superorder">
				<img className="superorder-img" src={superorder.imageUrl} alt="Superorder image" />
				<div className="superorder-info">
					<h3 className="bold">
						<a href={superorder.storeURL} target="_blank"><span className="uppercase">{superorder.storeName}</span></a>
						{", " + superorder.storeLocation}
					</h3>
					<img className="avatar" src={superorder.user.imageUrl} alt="avatar"/>
					{/* <img src={superorder.user.imageUrl} alt="avatar"/>*/}
					<img className="emailIcon" src={emailIcon} alt="Email" /><br />
					<span>Initiated by {superorder.user.firstName + " " + superorder.user.lastName}</span><br />
					<img className="boxIcon" src={boxIcon} alt="Ship location" />
					<span>{superorder.arrivalLocation}</span><br />
					<span>Ends in {dateDiffInDays(new Date(), new Date(superorder.deadline))} days. Till&nbsp;
						{superorder.deadline.substring(0, 10)}</span><br />
					<span>{superorder.availableDispatch}</span><br />
					<p><span className="semi-bold">Tags:</span>
						{tagsStr}
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
