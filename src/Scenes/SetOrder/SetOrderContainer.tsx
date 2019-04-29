import * as React from 'react';
import * as setOrderActions from './SetOrderActions';
import * as userOrdersActions from './../UserAccount/UserOrders/UserOrdersActions';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ItemDisplay from './ItemDisplay';
import Navbar from '../../Components/Navbar';
import SuperorderInspect from '../../Superorder/SuperorderInspect';
import Loader from '../../Components/Loader';

const mapStateToProps = state => ({
	superorder: state.setOrder.attributes,
	items: state.setOrder.items,
	isLoading: state.setOrder.loading,
	remoteOrders: state.userOrders.results,
	superOrderId: state.setOrder.attributes.id,
});

const mapDispatchToProps = dispatch => ({
	getSuperorder: id => dispatch(setOrderActions.getSuperorder(id)),
	postOrder: (id, details) => dispatch(setOrderActions.postOrder(id, details)),
	getRemoteOrderItems: () => dispatch(userOrdersActions.getUserOrders()),
});

interface ISetOrderContainerProps {
	superorder: any;
	getSuperorder: any;
	superOrderId: number;
	items: any;
	postOrder: any;
	isLoading: boolean;
	remoteOrders: any;
	getRemoteOrderItems: any;
}

class SetOrderContainer extends React.Component<RouteComponentProps & ISetOrderContainerProps> {
	public componentDidMount() {
		const id = 'id';
		const superorderId = this.props.match.params[id];
		this.props.getSuperorder(superorderId);
		this.props.getRemoteOrderItems();
	}

	public render() {
		//   if(this.props.isLoading){

		//       return (<div className="setOrder">
		//                 <Navbar isCatalog={false} />
		//                 <Loader/>
		//             </div>);

		//   }


		return (
			<div className="setOrder">
				<Navbar isCatalog={false} {...this.props} />
				<div>
					<SuperorderInspect superorder={this.props.superorder} />
					<h3>Current orders:</h3>
					{// console.log(this.props.remoteOrders)

					this.props.remoteOrders
						.filter(c => c.id === this.props.superOrderId)
						.map(c => c.myOrder.orderItems)
						.map(c => c[0])
						.map(c => (
							<ItemDisplay key={c.id} qt={c.quantity} info={c.additionalInfo} />
						))}
					<br />
					{this.props.isLoading ? (
						<Loader />
					) : (
						<ItemForm
							key={-1}
							post={e => {
                                this.props.postOrder(this.props.match.params, e);
							}}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SetOrderContainer);
