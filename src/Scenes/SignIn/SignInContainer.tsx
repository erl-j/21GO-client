import * as actions from './SignInActions';
import * as React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { Redirect } from 'react-router';

interface ISignInContainerProps {
	onSignInPressed: any;
	isSignedIn: boolean;
	isLoading: boolean;
	error: any;
}

const mapDispatchToProps = (dispatch: any) => ({
	onSignInPressed: (username: string, password: string) => dispatch(actions.fetchJwt(username, password)),
});

const mapStateToProps = (state: any) => ({
	isLoading: state.signIn.loading,
	isSignedIn: state.signIn.isSignedIn,
	error: state.signIn.error
});

class SignInContainer extends React.Component<ISignInContainerProps> {
	public render() {
		const redirect = this.props.isSignedIn ? <Redirect to="/catalog" /> : '';
		return (
			<React.Fragment>
                {redirect}
				<SignIn onSignInPressed={this.props.onSignInPressed} isLoading={this.props.isLoading} error={this.props.error}/>
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInContainer);
