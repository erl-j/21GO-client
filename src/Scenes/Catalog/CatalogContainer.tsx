import * as React from 'react';
import { RouteComponentProps} from 'react-router';
// import {Link} from "react-router-dom"
import * as queryString from 'query-string';
import SuperorderSummary from '../../Superorder/SuperorderSummary';
import SetSuperorderContainer from '../SetSuperorder/SetSuperorderContainer';
import { connect } from 'react-redux';
import * as actions from './CatalogActions';
import Navbar from '../../Components/Navbar';
import CatalogFilter from './CatalogFilter';
import Loader from "../../Components/Loader";


interface ICatalogContainerProps {
	isLoading: boolean;
	searchSuperorders: any;
	searchResults: any;
	error: any;
}

const mapDispatchToProps = dispatch => ({
	searchSuperorders: (queryParameters: object) => dispatch(actions.searchSuperOrders(queryParameters)),
});

const mapStateToProps = state => ({
	isLoading: state.catalog.loading,
	searchResults: state.catalog.results,
	error: state.catalog.error,
});

class CatalogContainer extends React.Component<RouteComponentProps & ICatalogContainerProps> {
	constructor(props){
		super(props);
		this.state={
			tags:[],
			sortType:"deadline",
			sortOrder:"ASC"
		}

	}

	public componentDidMount() {
		let queryParameters = queryString.parse(this.props.location.pathname.substring("/catalog/".length));
		console.log(queryParameters);
		if(Object.keys(queryParameters).length===0){
			queryParameters=this.state;
			console.log(queryParameters);
		}
		this.setState(queryParameters);
		this.props.searchSuperorders(queryParameters);
	}

	public updateParams(p){
		const state=this.state;
		Object.keys(p).forEach(k=>state[k]=p[k]);
		this.setState(state,()=>{
			this.props.searchSuperorders(state);
			const qS=queryString.stringify(state);
			this.props.history.push('/catalog/' + qS);});
	}



	public render() {

		let cont;

		if(this.props.isLoading){
			cont = <Loader/>;
		}
		else{
			cont = this.props.searchResults.map(res => {
				return (<SuperorderSummary
					key={res.id}
					{...res}
					onClick={() => this.props.history.push('/setOrder/' + res.id)}
				/>);
			});
		}

		return (
			<div className="catalog">
				<Navbar isCatalog={true}/>
				<CatalogFilter pushParam={p=>this.updateParams(p)}/>
				<div className="catalog-content">
					{/*this.state.setSuperorder ? <SetSuperorderContainer /> : ""*/}
					<SetSuperorderContainer />
					<div className="catalog-content-superorders">{cont}</div>
					<h1>{this.props.error}</h1>
				</div>
			</div>
		);

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CatalogContainer);
