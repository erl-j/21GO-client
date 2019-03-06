import * as actions from './SignInActions';
import * as React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { Redirect } from 'react-router';

interface ISignInContainerProps {
	onSignInPressed: any;
	isSignedIn: boolean;
	isSignInLoading: boolean;
}

const mapDispatchToProps = (dispatch: any) => ({
	onSignInPressed: (username: string, password: string) => dispatch(actions.fetchJwt(username, password)),
});

const mapStateToProps = (state: any) => ({
	isSignInLoading: state.signIn.loading,
	isSignedIn: state.signIn.isSignedIn,
});

class SignInContainer extends React.Component<ISignInContainerProps> {
	public render() {
		const redirect = this.props.isSignedIn ? <Redirect to="/catalog" /> : '';
		return (
			<React.Fragment>
                {redirect}
				<SignIn onSignInPressed={this.props.onSignInPressed} isSignInLoading={this.props.isSignInLoading} />
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInContainer);
