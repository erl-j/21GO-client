import * as React from 'react';
// import { Redirect } from 'react-router';
// import { useState } from 'react';
import im from './im1.jpg';
import boxIcon from './box_icon.png';

const SuperorderSummary = props => {
	return (
		<div className="card ml-2 mt-2 rounded-0" onClick={props.onClick}>
			<img className="card-img-top" src={im} alt="Card image cap" />
			<div className="card-body">
				<span className="fixed-left">
					<span className="font-weight-light">Ends in </span>
					{dateDiffInDays(new Date(), new Date(props.deadline))} days
				</span>
				<span>
					<img src={boxIcon} />
					<span>{props.arrivalLocation.substring(0, 2)}</span>
				</span>
			</div>
			{/* <ul>
			{Object.keys(props).map(ent => (
				<li key={ent}>{ent + ':' + props[ent]}</li>
			))}
		</ul> */}
		</div>
	);
};

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
	// Discard the time and time-zone information.
	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export default SuperorderSummary;
