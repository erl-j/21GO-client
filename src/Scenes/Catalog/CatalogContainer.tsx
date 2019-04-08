import * as React from 'react';
import { RouteComponentProps} from 'react-router';
import * as queryString from 'query-string';
import SuperorderSummary from '../../Superorder/SuperorderSummary';
import { connect } from 'react-redux';
import * as actions from './CatalogActions';


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
	public componentDidMount() {
		const queryParameters = queryString.parse(this.props.location.search);
		this.props.searchSuperorders(queryParameters);
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
			<div>
				<h3>This is a catalog search with parameters</h3>
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
