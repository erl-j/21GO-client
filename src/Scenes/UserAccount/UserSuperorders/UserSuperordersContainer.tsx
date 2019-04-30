import * as React from 'react';
import { connect } from 'react-redux';
import UserSuperorder from "./UserSuperorder" ;
import * as actions from "../../UserAccount/UserSuperorders/UserSuperordersActions";
import Loader from "../../../Components/Loader";
import {clearJwt} from "../../../helpers/loadJwt";
import {RouteComponentProps} from "react-router";
import OrderImg from '../../../img/order_img.jpg';

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

class UserSuperordersContainer extends React.Component<IUserSuperordersContainerProps & RouteComponentProps> {

    public componentDidMount(){
		this.props.getUserSuperorders();
	}

	public render() {
		let content;

		if(this.props.isLoading){
			content = <Loader/>;
		}

		if(this.props.error){
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

		const superorders = this.props.userSuperordersResults;

		const list = Object.keys(superorders).map(key =>
			(<UserSuperorder key = {superorders[key].id!} superorder = {superorders[key]} />)
		);

		content = (
			<React.Fragment>
				{list}
			</React.Fragment>
		);

		return (
			<React.Fragment>
				{content}
				<div className="account-superorders">
					<div className="account-items semi-bold">
						<div className="box1">
							<img className="item-img" src={OrderImg} alt="" />
						</div>
						<div className="box2">
							<span>StoreName, CountryCode</span>
							<span>#SuperorderId</span>
							<span>Duration</span>
						</div>
						<div className="box3">
							<span>? Members</span>
							<span>Dispatch</span>
							<span>Status: Ordered</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSuperordersContainer);
