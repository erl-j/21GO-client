import * as React from 'react';

const SuperorderInspect = (props) => {

	return (<ul>
	{
		Object.keys(props).map(ent=>
			<li key={ent}>{ent+":"+props[ent]}</li>
			)
	}</ul>);
};

export default SuperorderInspect;
