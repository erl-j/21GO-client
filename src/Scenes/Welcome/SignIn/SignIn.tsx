import * as React from 'react';
import { useState } from 'react';
import Loader from '../../../Components/Loader';

const SignIn = ({ onSignInPressed, isLoading, error}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	if (isLoading) {
		return <div><Loader /><br /></div>;
	}
	else {
		return (
			<div>
				<form className="welcome-form" onSubmit={(e) => {e.preventDefault(); onSignInPressed(username, password)}}>
					<input name="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
					<br />
					<input name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
					<br />
					<input className="button2" type="submit" value="Enter" />
				</form>;
				{error && <h3 className="error">{error.toString()}</h3>}
			</div>
		);
	}

};

export default SignIn;
