import * as React from 'react';
import { connect } from 'react-redux';
import UserOrder from './UserOrder';
import * as actions from '../../UserAccount/UserOrders/UserOrdersActions';
import {clearJwt} from '../../../helpers/loadJwt';
import {RouteComponentProps} from "react-router";
import Loader from '../../../Components/Loader';
import UserOrderDetails from './UserOrderDetails';

interface IUserOrdersContainerProps {
	isLoading: boolean;
	getUserOrders: any;
	userOrders: any;
	error: any;
	deleteOrder: any;
}

const mapStateToProps = state => ({
	isLoading: state.userOrders.loading,
	userOrders: state.userOrders.userOrders,
	error: state.userOrders.error,
});

const mapDispatchToProps = dispatch => ({
	getUserOrders: () => dispatch(actions.getUserOrders()),
	deleteOrder: (id) => dispatch(actions.deleteOrder(id))
});

class UserOrdersContainer extends React.Component<IUserOrdersContainerProps & RouteComponentProps,
	{isShowingDetails: boolean, selectedSuperorderIndex: any}>  {
	constructor(props) {
		super(props);
		this.state = {
			isShowingDetails: false,
			selectedSuperorderIndex: -1
		};
	}

	public componentDidMount(){
		this.props.getUserOrders();
	}

	public render() {
		let content;

		if(this.props.isLoading){
			content = <Loader/>;
		}
		else if(this.props.error){

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
		else {

			console.log(this.props.userOrders);
			const orders = this.props.userOrders;

			const list = Object.keys(orders).map(key => {
				const order = orders[key] as { id: any };
				return <UserOrder key={order.id} superorder={order}
								  seeDetails={() =>
									  this.setState({isShowingDetails: true, selectedSuperorderIndex: key})}/>
			});

			content = (
				<React.Fragment>
					{list}
				</React.Fragment>
			);
			console.log(this.state);

		}

		return (
			<React.Fragment>
				{this.state.isShowingDetails? <UserOrderDetails onDelete={(id) => this.props.deleteOrder(id)}
					goBack={() => this.setState({isShowingDetails: false})}
					superorder={this.props.userOrders[this.state.selectedSuperorderIndex]} /> : ''}

				<div className="account-orders">
					{content}
				</div>
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserOrdersContainer);
