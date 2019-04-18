import * as React from 'react';

const SuperorderInspect = (props) => {
	console.log(props)
	
	let display;
	if(props.superorder){
		const superorder=props.superorder;
		display=(<ul>
			{Object.keys(superorder).map(ent=>
				<li key={ent}>{ent+":"+superorder[ent]}</li>
				)}
		</ul>)
	}
	else{
		display="";
	}
	return display;
};

export default SuperorderInspect;
