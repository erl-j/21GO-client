import * as React from 'react';
import { connect } from 'react-redux';
import UserOrder from './UserOrder';
import * as actions from '../../UserAccount/UserOrders/UserOrdersActions';
import {clearJwt} from '../../../helpers/loadJwt';
import {Redirect} from "react-router";
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

class UserOrdersContainer extends React.Component<IUserOrdersContainerProps,
	{isShowingDetails: boolean, selectedSuperorderId: any}>  {
	constructor(props) {
		super(props);
		this.state = {
			isShowingDetails: false,
			selectedSuperorderId: -1
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
				return <Redirect to={"/catalog"}/>
			}
			else{
				content = <h3 className="error">{this.props.error.message}</h3>
			}
		}
		else {
			console.log(this.props.userOrders);
			const superorders = this.props.userOrders;

			const list = Object.keys(superorders).map(key => {
				const superorder = superorders[key] as { id: any };
				return <UserOrder key={superorder.id} superorder={superorder}
								  seeDetails={() => this.setState({isShowingDetails: true,
										  selectedSuperorderId: superorder.id})}/>
			});

			content = (<React.Fragment>{list}</React.Fragment>);
			console.log(this.state);
		}

		return (
			<React.Fragment>

				{this.state.isShowingDetails

					? <UserOrderDetails
						onDelete={(id) => this.props.deleteOrder(id)}
						goBack={() => this.setState({isShowingDetails: false})}
						superorder={ this.props.userOrders.find(el => el.id === this.state.selectedSuperorderId)}
					/>

					: ''
				}

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
