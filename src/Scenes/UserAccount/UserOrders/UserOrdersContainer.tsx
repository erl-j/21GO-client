import * as React from 'react';
import { connect } from 'react-redux';
import UserOrder from "./UserOrder";
import * as actions from "../../UserAccount/UserOrders/UserOrdersActions";
import Loader from "../UserSuperorders/UserSuperordersContainer";

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

class UserOrdersContainer extends React.Component<IUserOrdersContainerProps>  {

	public componentDidMount(){
		this.props.getUserOrders();
	}

	public render() {
		if(this.props.isLoading){
			return <Loader/>;
		}

		const divStyle = {
			margin: '40px',
			border: '5px solid pink',
			background: 'grey',
		};

		const onDragStart = (event, id) => {
			event.dataTransfer.setData(event, id);
		};

		let confirmDelete = <div />;

		const onDragOver = event => {
			event.preventDefault();
			
		};

		const onDrop = event => {
			confirmDelete = <div>are you sure you want to delete this order?</div>;
			console.log('drop');
		};


		console.log(this.props.userOrdersResults);
		const orders = this.props.userOrdersResults;
		const idKey = "id";

		const list = Object.keys(orders).map(key =>
			(<UserOrder key={orders[key][idKey]} superorder = {orders[key]} />)
		);

		return (
			<div>
				<div style={divStyle} draggable={true} onDragStart={event => onDragStart(event, event.target)}>
					<h1>Here are my orders</h1>
				</div>

				<div onDragOver={event => onDragOver(event)} onDrop={(e)=>onDrop(e)}>Garbage Can</div>
				{confirmDelete}


				{list}

			</div>

		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserOrdersContainer);
