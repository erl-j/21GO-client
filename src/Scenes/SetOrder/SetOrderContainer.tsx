import * as React from 'react';
import * as setOrderActions from './SetOrderActions';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import ItemDisplay from './ItemDisplay';
import Navbar from '../../Components/Navbar';
import SuperorderInspect from '../../Superorder/SuperorderInspect';
import Loader from '../../Components/Loader';
import loadJwt, {clearJwt} from "../../helpers/loadJwt";

const mapStateToProps = state => ({
	superorder: state.setOrder.attributes,
	items: state.setOrder.items,
	isLoading: state.setOrder.loading,
	error: state.setOrder.error
});

const mapDispatchToProps = dispatch => ({
	getSuperorder: id => dispatch(setOrderActions.getSuperorder(id)),
	postOrder: (id, details) => dispatch(setOrderActions.postOrder(id, details)),
});

interface ISetOrderContainerProps {
	superorder: any;
	getSuperorder: any;
	items: any;
	postOrder: any;
	isLoading: boolean;
	error: any
}

class SetOrderContainer extends React.Component<RouteComponentProps & ISetOrderContainerProps> {

	public componentDidMount()  {
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

		const content: JSX.Element[] = [];

		if(this.props.isLoading){
			content.push(<Loader/>);
		}
		else{

			content.push(<SuperorderInspect superorder={this.props.superorder} />);

			if(loadJwt() == null){ // NOT SIGNED IN
				content.push(<p>You must be logged in to see more</p>);
			}
			else if(this.props.superorder.hasOwnProperty("orders")){ // MY SUPERORDER
				content.push(<h3>Current Orders:</h3>);

				for(const order of this.props.superorder.orders){

					 content.push(<h6>{order.status}</h6>);
					 content.push(<h6>{order.dispatch}</h6>);
					 content.push(order.orderItems.map((c) =>
						 <ItemDisplay key={c.id} url={c.url} qt={c.quantity} info={c.additionalInfo} />));

				}
				content.push(<p>Tis mine</p>); // TODO Show all orders
			}
			else if(this.props.superorder.hasOwnProperty("myOrder")){ // ALREADY HAS AN ORDER

				content.push(<h3>My order:</h3>);
				content.push(<h6>{this.props.superorder.myOrder.status}</h6>);
				content.push(<h6>{this.props.superorder.myOrder.dispatch}</h6>);
				content.push(this.props.superorder.myOrder.orderItems.map((c) =>
					<ItemDisplay key={c.id} url={c.url} qt={c.quantity} info={c.additionalInfo} />));

			}
			else{ // HAS NO ORDER
				content.push(<h3>New order:</h3>);
				content.push(<ItemForm key={-1} post={e => {this.props.postOrder(this.props.match.params, e);}}/>);
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
