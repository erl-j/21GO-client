import * as React from 'react';
import { useState } from 'react';
import Loader from '../../../Components/Loader';

const SignIn = ({ onSignInPressed, isLoading, error}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	let content;
	if (isLoading) {
		content = <Loader />;
	} else {
		content = <form className="welcome-form" onSubmit={(e) => {e.preventDefault(); onSignInPressed(username, password)}}>
								<input name="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
								<br />
								<input name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
								<br />
								<a href="#!">Forgot your password?</a>
								<br />
								<input className="button2" type="submit" value="Enter" />
							</form>;
	}

	return (
		<div>
			{content}
			{error && <h3 className="error">{error.toString()}</h3>}
		</div>
	);
};

export default SignIn;
