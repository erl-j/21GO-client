import * as React from 'react';
import { connect } from 'react-redux';
import UserSuperorder from "./UserSuperorder" ;
import * as actions from "../../UserAccount/UserSuperorders/UserSuperordersActions";

interface IUserSuperordersContainerProps {
	isLoading: boolean;
	searchSuperorders: any;
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

class UserSuperordersContainer extends React.Component<IUserSuperordersContainerProps> {
    
    public componentDidMount(){

    }

	public render() {

    	const list = this.props.userSuperordersResults.map((superorder) => <UserSuperorder superOrder={{superorder}} />);
		return (
			{list}
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSuperordersContainer);
