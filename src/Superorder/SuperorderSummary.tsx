import * as React from 'react';
import { Redirect } from 'react-router';
import { useState } from 'react';

// The redirect here is gore. Move redirect to container and send down redireting fn as prop.
const SuperorderSummary = props => {
	const [isClicked, setClick] = useState(false);
	const redirect = isClicked ? <Redirect to={'/setOrder/' + props.id} /> : '';
	return (
		<ul>
			<button onClick={() => setClick(true)}>view order</button>
			{redirect}
			{Object.keys(props).map(ent => (
				<li key={ent}>{ent + ':' + props[ent]}</li>
			))}
		</ul>
	);
};

export default SuperorderSummary;
