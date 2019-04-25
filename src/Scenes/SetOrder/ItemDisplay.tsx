import * as React from 'react';

const ItemDisplay = ({ info, qt }) => {
	return (
		<div>
			<span >{info}</span>
			<span>{qt}</span>
		</div>
	);
};
export default ItemDisplay;
