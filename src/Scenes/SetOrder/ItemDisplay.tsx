import * as React from 'react';

const ItemDisplay = ({ url, info, qt }) => {
	return (
		<div>
			<span>{url}</span>
			<span >{info}</span>
			<span>{qt}</span>
		</div>
	);
};
export default ItemDisplay;
