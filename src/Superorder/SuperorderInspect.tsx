import * as React from 'react';
import im from './im1.jpg';

const SuperorderInspect = ({superorder}) => {
	console.log(superorder);
	let display;
	if(superorder){
		display=(
			<div className="superorder">
				<img src={im} alt="Superorder image" />
				<div className="superorder-info">
					<ul>
						{
							Object.keys(superorder).map(ent=>
							<li key={ent}>{ent+":"+superorder[ent]}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
	else{
		display="";
	}
	return display;
};

export default SuperorderInspect;
