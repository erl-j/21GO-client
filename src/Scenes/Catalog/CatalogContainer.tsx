import * as React from 'react';
import { RouteComponentProps} from 'react-router';
// import {Link} from "react-router-dom"
import * as queryString from 'query-string';
import SuperorderSummary from '../../Superorder/SuperorderSummary';
import { connect } from 'react-redux';
import * as actions from './CatalogActions';
import Navbar from '../../Components/Navbar';
import CatalogFilter from './CatalogFilter';


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
			sort:null,
			from:null
		}

	}

	public componentDidMount() {
		const queryParameters = queryString.parse(this.props.location.search);
		this.props.searchSuperorders(queryParameters);
	}

	public updateParams(p){
		const state=this.state;
		Object.keys(p).forEach(k=>state[k]=p[k]);
		this.setState(state,()=>{
			console.log(this.state);
			this.props.searchSuperorders(state);
			const qS=queryString.stringify(state);
			this.props.history.push('/catalog/' + qS);});
	}



	public render() {

		// Test for search. DELETE BEFORE SUBMISSION!

		// const testSearchLink = () => {
		// 	const param = { sortType: 'createdAt', sortOrder: 'ASC' , tags:["vanessa","stanley"],page:3,dispatch:"PICKUP"};
		// 	const paramString=queryString.stringify(param);
		// 	console.log(paramString);
		// 	return <Link to={"/catalog/search?"+paramString}>

		// 	<button>test search</button>

		// 	</Link>;
		// };


		return (
			<div className="catalog">
				<Navbar isCatalog={true}/>
				<CatalogFilter pushParam={p=>this.updateParams(p)}/>
				<div className="row">
					{this.props.searchResults.map(res => (
						<SuperorderSummary
							key={res.id}
							{...res}
							onClick={() => this.props.history.push('/setOrder/' + res.id)}
						/>
					))}
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
