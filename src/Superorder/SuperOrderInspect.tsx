import * as React from 'react';
import im from './im1.jpg';

const SuperorderInspect = (props) => {
	let display;
	if(props){
		display=(
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
		)
	}
	else{
		display="";
	}
	return display;
};

export default SuperorderInspect;
