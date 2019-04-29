import * as React from 'react';
import * as actions from './SignUpActions';
import { connect } from 'react-redux';
import SignUp from './SignUp';


interface ISignUpContainerProps {
	onSignUpPressed: any;
	isSignedUp: boolean;
	isSignUpLoading: boolean;
	redirectToSignIn: any;
}

const mapStateToProps = state => ({
	isSignedUp: state.signUp.isSignedUp,
	isSignUpLoading: state.signUp.loading,
});

const mapDispatchToProps = (dispatch: any, ownProps:any) => ({
	onSignUpPressed: (params:object) => dispatch(actions.createUser(params, ownProps)),
});


class SignUpContainer extends React.Component<ISignUpContainerProps> {
	public render() {
		// const redirect = this.props.isSignedUp ? <Redirect to="/signIn" /> : '';
		if(this.props.isSignedUp){
			this.props.redirectToSignIn();
		}
		return (
			<React.Fragment>
				{/* {redirect} */}
				<SignUp {...this.props} />
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpContainer);
