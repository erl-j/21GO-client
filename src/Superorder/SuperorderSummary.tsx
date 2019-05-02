import * as React from 'react';
import boxIcon from '../img/icons/box.svg';

const SuperorderSummary = props => {
	return (
		<div className="catalog-superorder" onClick={props.onClick}>
			<div className="catalog-superorder-img"><img src={props.imageUrl} alt="Superorder image" /></div>
			<div className="catalog-superorder-store">
				<a href={props.storeURL} target="_blank"><span className="bold uppercase">{props.storeName}</span></a>
				<span className="uppercase">{props.storeLocation.substr(0,2)}</span>
			</div>
			<div className="catalog-superorder-info">
				<span className="bold">
					Ends in {dateDiffInDays(new Date(), new Date(props.deadline))} days
				</span>
				<span>
					<img src={boxIcon} alt="Ship location" />
					<span className="uppercase">{props.arrivalLocation.substring(0, 2)}</span>
				</span>
			</div>
			<div className="catalog-superorder-user vertical-center">
				<img className="avatar inner" src={props.user.imageUrl} alt="avatar"/>
				<span className="inner">{props.user.firstName + " " + props.user.lastName}</span>
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
