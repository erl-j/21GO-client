import * as React from 'react';
import { useState } from 'react';

const SignIn = ({ onSignInPressed, isSignInLoading }) => {
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
			<h3>{isSignInLoading ? 'LOADING' : 'NOT LOADING'}</h3>
		</div>
	);
};

export default SignIn;
