import * as React from 'react';
// import { Redirect } from 'react-router';
// import { useState } from 'react';

const SuperorderSummary = props => {
	return (
		<ul>
			{Object.keys(props).map(ent => (
				<li key={ent}>{ent + ':' + props[ent]}</li>
			))}
		</ul>
	);
};

export default SuperorderSummary;
