import * as React from 'react';
import SignInContainer from './SignIn/SignInContainer';
import SignUpContainer from './SignUp/SignUpContainer';

export enum WelcomeMode {
	SIGN_IN, SIGN_UP
}

const Welcome = ({mode, history}) => {

	return (

		<div className="welcome">
			<div className="overlay" />
			<div className="contents">
				<img className="logo"/>
				<p>- Hello there, welcome to 21go -</p>
				<div className="welcome-account">
					{mode === WelcomeMode.SIGN_IN ? <SignInContainer /> : <SignUpContainer success={false} />}
					<button className={"button1" + ((mode === WelcomeMode.SIGN_IN) ? " active": "")}
							onClick={() => history.push("/signIn")}>Sign in</button>
					<button className={"button1" + ((mode === WelcomeMode.SIGN_UP) ? " active": "")}
							onClick={() => history.push("/signUp")}>Sign up</button>
				</div>
			</div>
		</div>

	)
};

export default Welcome;
