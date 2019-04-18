import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from "./UserProfileActions";
import UserProfile from './UserProfile'
import Loader from "../../../Components/Loader";

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

class UserProfileContainer extends React.Component<IUserProfileContainerProps> {
    
    public componentDidMount(){
        this.props.loadUser();
    }

	public render() {
    	console.log(this.props.user);
    	console.log(this.props.isLoading ?"ye":"ne");
		return this.props.isLoading ? <Loader/> : <UserProfile user={this.props.user}/>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileContainer);
