import * as React from 'react';
import { connect } from 'react-redux';
import UserSuperorder from './UserSuperorder';
import * as actions from '../../UserAccount/UserSuperorders/UserSuperordersActions';
import Loader from '../../../Components/Loader';
import {clearJwt} from '../../../helpers/loadJwt';
import {RouteComponentProps} from "react-router";
import UserSuperorderDetails from './UserSuperorderDetails';

interface IUserSuperordersContainerProps {
	isLoading: boolean;
	userSuperorders: any;
	error: any;

	getUserSuperorders: any;
	deleteSuperorder: any;
	editOrderStatus: any;
}

const mapStateToProps = state => ({
	isLoading: state.userSuperorders.loading,
	userSuperorders: state.userSuperorders.userSuperorders,
	error: state.userSuperorders.error,
});

const mapDispatchToProps = dispatch => ({
	getUserSuperorders: () => dispatch(actions.getUserSuperorders()),
	deleteSuperorder: (superorderId) => dispatch(actions.deleteSuperorder(superorderId)),
	editOrderStatus: (orderId, status) => dispatch(actions.editOrderStatus(orderId, status))
});

class UserSuperordersContainer extends React.Component<IUserSuperordersContainerProps
	& RouteComponentProps, {isShowingDetails: boolean, selectSuperorderIndex: number}> {
	constructor(props) {
		super(props);
		this.state = {
			isShowingDetails: false,
			selectSuperorderIndex: -1
		};
	}

    public componentDidMount(){
		this.props.getUserSuperorders();
	}

	public render() {
		let content;

		if(this.props.isLoading){
			content = <Loader/>;
		}
		else if(this.props.error){
			console.log(this.props.error);
			if(this.props.error.status === 401){
				clearJwt();
				alert("Your session has expired");
				this.props.history.push("/catalog");
				content = null;
			}
			else{
				content = <h3 className="error">{this.props.error.message}</h3>
			}
		}
		else{

			const superorders = this.props.userSuperorders;

			const list = Object.keys(superorders).map(key =>
				(<UserSuperorder key = {superorders[key].id!}  superorder = {superorders[key]}
								 seeDetails={() => this.setState({isShowingDetails: true,
									selectSuperorderIndex: key as unknown as number})} />)
			);

			content = (
				<React.Fragment>
					{list}
				</React.Fragment>
			);

		}

		return (
			<React.Fragment>
				{this.state.isShowingDetails
					? <UserSuperorderDetails
						goBack={() => this.setState({isShowingDetails: false})}
						superorder={this.props.userSuperorders[this.state.selectSuperorderIndex]}
						onStatusChange={this.props.editOrderStatus}
						onDelete={this.props.deleteSuperorder}
					/>
					: ''}
				<div className="account-superorders">
					{content}
				</div>
			</React.Fragment>
		);
	}
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSuperordersContainer);
