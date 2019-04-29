import * as React from 'react';
import SignInContainer from './SignIn/SignInContainer';
import SignUpContainer from './SignUp/SignUpContainer';
import {RouteComponentProps} from "react-router";

export enum WelcomeMode {
	SIGN_IN, SIGN_UP
}

class Welcome extends React.Component<RouteComponentProps & {mode: WelcomeMode}, {mode: WelcomeMode}> {

	constructor(props) {
		super(props);
		this.state = {
			mode: props.mode
		};
	}

	public render(){

		let welcomeForm;
		let signInClass;
		let signUpClass;

		signInClass = ['button1'];
		signUpClass = ['button1'];

		if(this.state.mode === WelcomeMode.SIGN_IN) {
			welcomeForm = <SignInContainer />;
			signInClass.push('active');
		} else if (this.state.mode === WelcomeMode.SIGN_UP) {
			welcomeForm = <SignUpContainer redirectToSignIn={this.goToSignIn} />;
			signUpClass.push('active');
		}

		return (

			<div className="welcome">
				<div className="overlay" />
				<div className="contents">
					<img className="logo"/>
					<p className="semi-bold">- Welcome to the world -</p>
					<div className="welcome-account">
						{welcomeForm}
						<button className={signInClass.join(' ')} onClick={this.goToSignIn}>Sign in</button>
						<button className={signUpClass.join(' ')} onClick={this.goToSignUp}>Sign up</button>
					</div>
				</div>
			</div>

		)
	}

	private goToSignIn = () => {
		this.setState({mode: WelcomeMode.SIGN_IN});
		this.props.history.push("/signIn");
	};

	private goToSignUp = () => {
		this.setState({mode: WelcomeMode.SIGN_UP});
		this.props.history.push("/signUp");
	};
}

export default Welcome;
