import * as React from 'react';
import { connect } from 'react-redux';
import UserSuperorder from "./UserSuperorder" ;
import * as actions from "../../UserAccount/UserSuperorders/UserSuperordersActions";
import Loader from "../../../Components/Loader";
import {clearJwt} from "../../../helpers/loadJwt";
import {RouteComponentProps} from "react-router";

interface IUserSuperordersContainerProps {
	isLoading: boolean;
	getUserSuperorders: any;
	userSuperordersResults: any;
	error: any;
}

const mapStateToProps = state => ({
	isLoading: state.userSuperorders.loading,
	userSuperordersResults: state.userSuperorders.results,
	error: state.userSuperorders.error,
});

const mapDispatchToProps = dispatch => ({
	getUserSuperorders: () => dispatch(actions.getUserSuperorders()),
});

class UserSuperordersContainer extends React.Component<IUserSuperordersContainerProps & RouteComponentProps> {
    
    public componentDidMount(){
		this.props.getUserSuperorders();
	}

	public render() {


		if(this.props.isLoading){
			return <Loader/>;
		}

		if(this.props.error){
			console.log(this.props.error);
			if(this.props.error.status === 401){
				clearJwt();
				alert("Your session has expired");
				this.props.history.push("/catalog");
				return null;
			}
			else{
				return <p>{this.props.error.message}</p>
			}
		}

		const superorders = this.props.userSuperordersResults;

		const list = Object.keys(superorders).map(key =>
			(<UserSuperorder key = {superorders[key].id!} superorder = {superorders[key]} />)
		);

		return (
			<React.Fragment>
				{list}
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSuperordersContainer);
