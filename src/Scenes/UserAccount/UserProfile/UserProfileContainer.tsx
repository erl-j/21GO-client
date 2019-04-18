import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from "./UserProfileActions";
import UserProfile from './UserProfile'

interface IUserProfileContainerProps {
    user: any;
    loadUser: any;
}
const mapStateToProps = state => ({
	user: state.account.results
});

const mapDispatchToProps = dispatch => ({
	loadUser: () => dispatch(actions.fetchAccount())
});

class UserProfileContainer extends React.Component<IUserProfileContainerProps> {
    
    public componentDidMount(){
        this.props.loadUser();
    }
	public render() {
		return (
			<UserProfile user={this.props.user}/>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileContainer);
