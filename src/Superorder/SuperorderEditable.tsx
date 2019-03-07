import { useState } from 'react';
import * as React from 'react';

const SuperorderEditable = ({attributes,post}) => {
	// const { id, storeURL, storeLocation, deadline, arrivalLocation, availableDispatch, tags } = props;

	const [isEditable, setEditable] = useState(true);
	const [params, setParams] = useState(
		attributes
	);
	return (
		<React.Fragment>
			<h3>Superorder {params.id}</h3>
			{Object.keys(attributes).map(k => (
				<React.Fragment key={k}>
					{k}:
					<input disabled={!isEditable} onChange={e => setParams(((params[k] = e.target.value), params))} />
					<br/>
				</React.Fragment>
			))}
			<button onClick={() => {
				post(params);
				setEditable(!isEditable)}}>{isEditable ? 'Seal' : 'Edit'}</button>
		</React.Fragment>
	);
};

export default SuperorderEditable;
