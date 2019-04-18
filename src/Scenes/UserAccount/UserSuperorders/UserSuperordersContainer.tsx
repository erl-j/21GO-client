import * as React from 'react';
import { connect } from 'react-redux';
import UserSuperorder from "./UserSuperorder" ;
import * as actions from "../../UserAccount/UserSuperorders/UserSuperordersActions";
import Loader from "../../../Components/Loader";

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

class UserSuperordersContainer extends React.Component<IUserSuperordersContainerProps> {
    
    public componentDidMount(){
		this.props.getUserSuperorders();
	}

	public render() {

    	if(this.props.isLoading){
    		return <Loader/>;
		}

		const superorders = this.props.userSuperordersResults;
		const idKey = "id";

		const list = Object.keys(superorders).map(key =>
			(<UserSuperorder key={superorders[key][idKey]} superorder = {superorders[key]} />)
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
