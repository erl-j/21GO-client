import * as React from 'react';
import im from './im1.jpg';

const SuperorderInspect = (props) => {
	return (
		<div className="superorder">
			<img src={im} alt="Superorder image" />
			<div className="superorder-info">

				<ul>
					{
						Object.keys(props).map(ent=>
						<li key={ent}>{ent+":"+props[ent]}</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default SuperorderInspect;
