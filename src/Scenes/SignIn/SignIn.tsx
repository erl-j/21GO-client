import * as React from 'react';
import { useState } from 'react';

const SignIn = ({ onSignInPressed, isLoading, error}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>
			
			<ul>
				<li>
					username:
					<input onChange={e => setUsername(e.target.value)} />
				</li>
				<li>
					password:
					<input onChange={e => setPassword(e.target.value)} />
				</li>
			</ul>
            <button onClick={() => onSignInPressed(username, password)}>Sign in</button>
			<h3>{isLoading ? 'LOADING' : 'NOT LOADING'}</h3>
			<h3>{error ? error.toString():""}</h3>
		</div>
	);
};

export default SignIn;
