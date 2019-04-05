import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from "./UserProfileActions";
import UserProfile from './UserProfile'

interface IUserProfileContainerProps {
    username: string;
    loadUsername:any;
}
const mapStateToProps = state => ({
	username: state.account.username
});

const mapDispatchToProps = dispatch => ({
	loadUsername:()=>dispatch(actions.loadUsername())
});

class UserProfileContainer extends React.Component<IUserProfileContainerProps> {
    
    public componentDidMount(){
        this.props.loadUsername();
    }
	public render() {
		return (
			<UserProfile username={this.props.username} email="myemail@gmail.com" phoneNumber="072 312323" address="kthvägen 10"    />
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileContainer);
