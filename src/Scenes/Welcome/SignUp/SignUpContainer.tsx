import * as React from 'react';
import * as actions from './SignUpActions';
import { connect } from 'react-redux';
import Loader from "../../../Components/Loader";
import ValidatedInput from "../../../Components/ValidatedInput";
import validators from "../../../constants/validators";
import {Redirect} from "react-router";

interface ISignUpContainerProps {
	onSubmit: any;
	isLoading: boolean;
	success: boolean;
	error: any;
}

const mapStateToProps = state => ({
	success: state.signUp.success,
	isLoading: state.signUp.loading,
	error: state.signUp.error
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
	onSubmit:  (params: object) =>{
		dispatch(actions.signUpBegin());
		dispatch(actions.createUser(params));
	}
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

	public componentDidUpdate(prevProps: Readonly<ISignUpContainerProps>,
							  prevState: Readonly<{ params: any; isValid: boolean }>, snapshot?: any): void {

		if(prevProps.error !== this.props.error) {
			if (this.props.error) {

				const obj = {...this.state.params};

				for (const error of this.props.error.details.error) {
					const key = error.property;
					const msg = Object.keys(error.constraints).reduce((previous, keyy) => {
						return previous + (previous !== "" ? ", " : "") + error.constraints[keyy];
					}, "");

					obj[key] = [this.state.params[key][0], msg];
				}

				this.setState({params: obj});
			}
		}
	}

	public render() {

		if(this.props.success) {
			alert("Successful Registration");
			return <Redirect to="/signIn"/>
		}

		if(this.props.isLoading) {
			return <Loader />;
		}

		return (<form className="welcome-form" onSubmit={this.onSubmit2}>

			{Object.keys(this.state.params).map(k => (
				<React.Fragment  key={k}>
					<ValidatedInput
						validationMessage={this.state.params[k][1]}
						value={this.state.params[k][0]}
						name={k}
						onBlur = {e => {
							const tmp = {...this.state.params};
							tmp[k] = [e.target.value, ""];
							this.setState({params: tmp});
						}} />
					<br />
				</React.Fragment>
			))}

			<input className="button2" type="submit" value="Submit" />
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

			const params = {...this.state.params};

			for(const key in params){
				if(params.hasOwnProperty(key)){
					params[key] = params[key][0];
				}
			}

			this.props.onSubmit(params);
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpContainer);
