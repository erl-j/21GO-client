import * as React from 'react';
import { connect } from 'react-redux';
import UserOrder from './UserOrder';
import * as actions from '../../UserAccount/UserOrders/UserOrdersActions';
import {clearJwt} from '../../../helpers/loadJwt';
import {RouteComponentProps} from "react-router";
import Loader from '../../../Components/Loader';
// import orderImg from '../../../img/order_img.jpg';
import UserOrderDetails from './UserOrderDetails';

interface IUserOrdersContainerProps {
	isLoading: boolean;
	getUserOrders: any;
	userOrdersResults: any;
	error: any;
}

const mapStateToProps = state => ({
	isLoading: state.userOrders.loading,
	userOrdersResults: state.userOrders.results,
	error: state.userOrders.error,
});

const mapDispatchToProps = dispatch => ({
	getUserOrders: () => dispatch(actions.getUserOrders()),
});

class UserOrdersContainer extends React.Component<IUserOrdersContainerProps & RouteComponentProps, {isShowingDetails:boolean, currentSuperorder:any}>  {
	constructor(props) {
		super(props);
		this.state = {
			isShowingDetails: false,
			currentSuperorder: {}
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

		if(this.props.error){

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

		console.log(this.props.userOrdersResults);
		const orders = this.props.userOrdersResults;
		const idKey = "id";

		const list = Object.keys(orders).map(key =>
			<UserOrder key={orders[key][idKey]} superorder = {orders[key]} seeDetails={() => this.setState({isShowingDetails: true, currentSuperorder: orders[key]})}/>
		);

		content = (
			<React.Fragment>
				{list}
			</React.Fragment>
		);
		console.log(this.state);

		return (
			<React.Fragment>
				{this.state.isShowingDetails? <UserOrderDetails goBack={() => this.setState({isShowingDetails: false})} superorder={this.state.currentSuperorder} /> : ''}
				<div className="account-orders">
					{/*<div className="account-items semi-bold" onClick={() => this.setState({isShowingDetails: true})}>
						<div className="box1">
							<img className="item-img" src={orderImg} alt="" />
						</div>
						<div className="box2">
							<span>StoreName, CountryCode</span>
							<span>#OrderId</span>
							<span>From InitiatorName</span>
						</div>
						<div className="box3">
							<span>? Items</span>
							<span>Dispatch</span>
							<span>Status: Pending</span>
							<span className="error">Deleted by initiator</span>
						</div>
					</div>*/}
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
