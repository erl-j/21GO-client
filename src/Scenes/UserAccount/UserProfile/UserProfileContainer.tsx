import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from "./UserProfileActions";

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
			<React.Fragment>
				<h1>Here are my account details</h1>
				<h1>username:{this.props.username}</h1>
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserProfileContainer);
