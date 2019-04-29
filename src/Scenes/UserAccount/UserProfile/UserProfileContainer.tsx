import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from "./UserProfileActions";
import UserProfile from './UserProfile'
import Loader from "../../../Components/Loader";
import {clearJwt} from "../../../helpers/loadJwt";
import {RouteComponentProps} from "react-router";

interface IUserProfileContainerProps {
	isLoading: boolean;
    user: any;
    loadUser: any;
	error: any;
}
const mapStateToProps = state => ({
	user: state.account.results,
	isLoading: state.account.loading,
	error: state.account.error,
});

const mapDispatchToProps = dispatch => ({
	loadUser: () => dispatch(actions.fetchAccount())
});

class UserProfileContainer extends React.Component<IUserProfileContainerProps & RouteComponentProps> {
    
    public componentDidMount(){
        this.props.loadUser();
    }

	public render() {

    	if(this.props.isLoading){
			return <Loader/>;
		}
		if(this.props.error){

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

		return <UserProfile user={this.props.user}/>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileContainer);
