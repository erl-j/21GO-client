import * as React from 'react';
import { useState } from 'react';
import SignInContainer from '../SignIn/SignInContainer';
import SignUpContainer from '../SignUp/SignUpContainer';

const welcomeMode = {
	signIn: 'SIGN_IN',
	signUp: 'SIGN_UP'
};

export const Welcome = () => {
	const [mode, setMode] = useState(welcomeMode.signIn);

	let welcomeForm;
	let signInClass;
	let signUpClass;

	signInClass = ['button1'];
	signUpClass = ['button1'];

	if(mode === welcomeMode.signIn) {
		welcomeForm = <SignInContainer />;
		signInClass.push('active');
	} else if (mode === welcomeMode.signUp) {
		welcomeForm = <SignUpContainer />;
		signUpClass.push('active');
	}

	return (

		<div className="welcome">
			<div className="overlay" />
			<div className="contents">
				<img className="logo" />
				<p>- Hello there, welcome to 21go -</p>
				<div className="welcome-account">
					{welcomeForm}
					<button className={signInClass.join(' ')} onClick={() => setMode(welcomeMode.signIn)}>Sign in</button>
					<button className={signUpClass.join(' ')} onClick={() => setMode(welcomeMode.signUp)}>Sign up</button>
				</div>
			</div>
		</div>
)};
