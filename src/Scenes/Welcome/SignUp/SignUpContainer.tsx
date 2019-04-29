import * as React from 'react';
import * as actions from './SignUpActions';
import { connect } from 'react-redux';
import Loader from "../../../Components/Loader";
import ValidatedInput from "../../../Components/ValidatedInput";
import validators from "../../../constants/validators";

interface ISignUpContainerProps {
<<<<<<< HEAD
	onSubmit: any;
	isLoading: boolean;
	success: boolean;
	error: any;
=======
	onSignUpPressed: any;
	isSignedUp: boolean;
	isSignUpLoading: boolean;
>>>>>>> Iris
	redirectToSignIn: any;
}

const mapStateToProps = state => ({
	success: state.signUp.success,
	isLoading: state.signUp.loading,
	error: state.signUp.error
});

<<<<<<< HEAD
const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
	onSubmit:  (params: object) =>{
		dispatch(actions.signUpBegin());
		dispatch(actions.createUser(params));
	}
=======
const mapDispatchToProps = (dispatch: any, ownProps:any) => ({
	onSignUpPressed: (params:object) => dispatch(actions.createUser(params, ownProps)),
>>>>>>> Iris
});

class SignUpContainer extends React.Component<ISignUpContainerProps,{params: any, isValid: boolean}>{

	constructor(props) {
		super(props);
		this.state = {
			params:{
				username: ['', ''],
				password: ['', ''],
				firstName: ['', ''],
				lastName: ['', ''],
				mail: ['', ''],
				phone: ['', ''],
				location: ['', ''],
			},
			isValid: false
		};
	}


	public render() {

		if(this.props.success){
			this.props.redirectToSignIn();
			alert("successful registration"); 
			return <div>yay</div>;
		}

		if(this.props.isLoading) {
			return <Loader />;
		}

		let errors = <p/>;

		if(this.props.error){
			errors = <p>{JSON.stringify(this.props.error)}</p>
		}

		return (<form className="welcome-form" onSubmit={this.onSubmit2}>

			{Object.keys(this.state.params).map(k => (
				<React.Fragment  key={k}>
					<ValidatedInput validationMessage={this.state.params[k][1]} name={k} onBlur = {e => {

						const tmp = this.state.params;
						tmp[k] = [e.target.value, ""];
						this.setState({params: tmp});

					}}/>
					<br />
				</React.Fragment>
			))}

			<input className="button2" type="submit" value="Submit" />
			{errors}
		</form>);
	}

	private onSubmit2 = (e) => {

		e.preventDefault();

		this.setState({isValid: true});

		Object.keys(this.state.params).forEach(key => {
			const validator = validators.signUp[key];
			const message = validator(this.state.params[key][0]);

			const msg = message ? message[0] : "";

			const tmp = this.state.params;
			tmp[key] = [this.state.params[key][0], msg];
			this.setState({params: tmp});

			if (message != null) {
				this.setState({isValid: false});
			}
		});

		if(this.state.isValid){

			const params = this.state.params;
			for(const key in params){
				if(params.hasOwnProperty(key)){
					params[key] = params[key][0];
				}
			}

			console.log(params);
			this.props.onSubmit(params);
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpContainer);
