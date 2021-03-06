import * as React from 'react';
import * as setOrderActions from './SetOrderActions';
import {Redirect, RouteComponentProps} from 'react-router';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import Navbar from '../../Components/Navbar';
import SuperorderInspect from '../../Superorder/SuperorderInspect';
import Loader from '../../Components/Loader';
import loadJwt, {clearJwt} from "../../helpers/loadJwt";
import OrderMySuperorder from "./OrderMySuperorder";
import OrderJoinedSuperorder from "./OrderJoinedSuperorder";

const mapStateToProps = state => ({
	superorder: state.setOrder.superorder,
	items: state.setOrder.items,
	isLoading: state.setOrder.loading,
	error: state.setOrder.error,
	deleted: state.setOrder.deleted
});

const mapDispatchToProps = dispatch => ({
	getSuperorder: id => dispatch(setOrderActions.getSuperorder(id)),
	postOrder: (attributes) => dispatch(setOrderActions.postOrder(attributes)),
	editOrderStatus: (id, status) => dispatch(setOrderActions.editOrderStatus(id, status)),
	deleteOrder: (id) => dispatch(setOrderActions.deleteOrder(id)),
	deleteSuperorder: (id) => dispatch(setOrderActions.deleteSuperorder(id))
});

interface ISetOrderContainerProps {
	superorder: any;
	items: any;
	isLoading: boolean;
	error: any;
	deleted: any;

	postOrder: any;
	getSuperorder: any;
	editOrderStatus: any;
	deleteOrder: any;
	deleteSuperorder: any;
}

class SetOrderContainer extends React.Component<RouteComponentProps & ISetOrderContainerProps> {

	public componentWillMount()  {
		const params = this.props.match.params as {id: string};
		this.props.getSuperorder(params.id);
	}

	public render() {

		// TODO Check this works
		if(this.props.error){ // TODO can't do that for post errors, only works for the get ones
			if(this.props.error.status === 401){
				clearJwt();
				const params = this.props.match.params as {id: string};
				this.props.getSuperorder(params.id);
				return null;
			}
			else {
				return <p>{JSON.stringify(this.props.error)}</p>
			}
		}

		if(this.props.deleted){
			alert("The superorder has been deleted");
			return <Redirect to={"/catalog"}/>;
		}

		const content: JSX.Element[] = [];

		if(this.props.isLoading){
			content.push(<Loader/>);
		}
		else{
			content.push(<SuperorderInspect superorder={this.props.superorder} />);

			if(loadJwt() == null){
				content.push(<h3>You must be logged in to see more</h3>);
			}
			else if(this.props.superorder.hasOwnProperty("orders")){

				content.push(<button className="button2 v3" onClick={() =>
					{this.props.deleteSuperorder(this.props.superorder.id)}} > Delete Superorder</button>);

				content.push(<h2>Current Orders:</h2>);

				for(const order of this.props.superorder.orders){
					content.push(<div className="setOrder-orders-container"><OrderMySuperorder key={order.id} order={order}
													onStatusChange={this.props.editOrderStatus}/></div> );
				}
			}

			else if(this.props.superorder.hasOwnProperty("myOrder")){
				content.push(<h2>My order:</h2>);
				content.push(<div className="setOrder-orders-container"><OrderJoinedSuperorder order={this.props.superorder.myOrder}
													onDelete={this.props.deleteOrder}/></div>);
			}

			else{
				content.push(<h3>New order:</h3>);
				content.push(<div className="setOrder-orders-container"><ItemForm key={-1} availableDispatch={this.props.superorder.availableDispatch}
									   post={attributes => {
									   	attributes.superOrderId = this.props.superorder.id;
									   	this.props.postOrder(attributes);
										}}/></div>);
			}
		}

		return (
			<div className="setOrder">
				<Navbar isCatalog={false} {...this.props} />
				<div>{content}</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SetOrderContainer);
