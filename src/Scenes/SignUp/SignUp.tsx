import * as React from 'react';
import { useState } from 'react';
import ValidatedInput from 'src/Components/ValidatedInput'

const SignUp = ({ onSignUpPressed, isSignUpLoading }) => {
	const [params, setParam] = useState({
		username: '',
		firstName: '',
		lastName: '',
		password: '',
		mail: '',
		phone: '',
		location: '',
	});

	return (
		<div>
            <ul>
			{Object.keys(params).map(k => (
				<li key={k}>
					{k}
					<ValidatedInput
						onChange={e =>
							setParam(
                                (params[k]=e.target.value,params)
							)
						}
					/>
				</li>
            ))}
            </ul>

			<button onClick={() => onSignUpPressed(params)}>Sign Up</button>
			<h3>{isSignUpLoading ? 'LOADING' : 'NOT LOADING'}</h3>
		</div>
	);
};

export default SignUp;
