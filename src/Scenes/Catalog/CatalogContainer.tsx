import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as queryString from 'query-string';
import SuperorderContainer from '../../Superorder/SuperorderContainer';
import SuperorderSummary from '../../Superorder/SuperorderSummary';
import { connect } from 'react-redux';
import * as actions from './CatalogActions';

interface ICatalogContainerProps {
	isLoading: boolean;
	searchSuperorders: any;
	searchResults: any;
}

const mapDispatchToProps = dispatch => ({
	searchSuperorders: (queryParameters: object) => dispatch(actions.searchSuperOrders(queryParameters)),
});

const mapStateToProps = state => ({
	isLoading: state.catalog.loading,
	searchResults: state.catalog.results,
});

class CatalogContainer extends React.Component<RouteComponentProps & ICatalogContainerProps> {
	public componentDidMount() {
		const queryParameters = queryString.parse(this.props.location.search);
		this.props.searchSuperorders(queryParameters);
	}

	public render() {
		// This next line is a hack. I am unable to properly type this.props.match so this will have to do.
		// const {location}:any=this.props.match.params;

		return (
			<div>
				<h3>This is a catalog search with parameters</h3>
				{this.props.searchResults.map(res =>
					<div className="border" key={res.id} onClick={() => this.props.history.push('/setOrder/' + res.id)}>
						<SuperorderContainer {...res} render={od => <SuperorderSummary {...od} />} />
					</div>
				)}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CatalogContainer);
