import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as queryString from 'query-string';
import SuperorderSummary from '../../Superorder/SuperorderSummary';
import SetSuperorderContainer from '../SetSuperorder/SetSuperorderContainer';
import { connect } from 'react-redux';
import * as actions from './CatalogActions';
import Navbar from '../../Components/Navbar';
import CatalogFilter from './CatalogFilter';
import Loader from '../../Components/Loader';

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

class CatalogContainer extends React.Component<RouteComponentProps & ICatalogContainerProps,{_filter:any, isSettingSuperorder:boolean}> {
	constructor(props) {
		super(props);
		this.state = {
			_filter:{
			tags: [],
			sortType: 'deadline',
			sortOrder: 'ASC',
			},
			isSettingSuperorder:false

		};
	}

	public componentDidMount() {
		let queryParameters = queryString.parse(this.props.location.pathname.substring('/catalog/'.length));
		console.log(queryParameters);
		if (Object.keys(queryParameters).length === 0) {
			queryParameters = this.state._filter;
			console.log(queryParameters);
		}
		this.setState({_filter:queryParameters});
		this.props.searchSuperorders(queryParameters);
	}

	public updateParams(p) {
		const newFilter = this.state._filter;
		Object.keys(p).forEach(k => (newFilter[k] = p[k]));
		this.setState({_filter:newFilter}, () => {
			this.props.searchSuperorders(newFilter);
			const qS = queryString.stringify(newFilter);
			this.props.history.push('/catalog/' + qS);
		});
	}

	public render() {
		let cont;

		if (this.props.isLoading) {
			cont = <Loader />;
		} else {
			cont = this.props.searchResults.map(res => {
				return (
					<SuperorderSummary
						key={res.id}
						{...res}
						onClick={() => this.props.history.push('/setOrder/' + res.id)}
					/>
				);
			});
		}

		return (
			<div className="catalog">
				<Navbar isCatalog={true} {...this.props}/>
				<CatalogFilter pushParam={p => this.updateParams(p)} goToSetSuperorder={()=>this.setState({isSettingSuperorder:true})} />
				<div className="catalog-content">
					{this.state.isSettingSuperorder? <SetSuperorderContainer goBack={()=>this.setState({isSettingSuperorder:false})} /> : ''}
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
