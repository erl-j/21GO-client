import * as React from 'react';
import SuperorderEditable from './SuperorderEditable';
import * as actions from './SetSuperorderActions';
import {connect} from "react-redux";

interface ISetSuperorderContainerProps {
	attributes: any,
	postSuperorder: any,
	isLoading: any,
	error: any,
	goBack: any
	id: any
}

const mapDispatchToProps = (dispatch) => ({
	postSuperorder: (attributes, handler) => dispatch(actions.postSuperorder(attributes, handler)),
});

const mapStateToProps = (state) => ({
	attributes: state.setSuperorder.attributes,
	isLoading: state.setSuperorder.loading,
	error: state.setSuperorder.error,
	id: state.setSuperorder.id
});

class SetSuperorderContainer extends React.Component<ISetSuperorderContainerProps>{
	public render() {

		if(this.props.error && this.props.error.status === 401){
			alert("401");
			// clearJwt();
			// return <Redirect to={"/signIn"}/>;
		}

		return <SuperorderEditable attributes={this.props.attributes}
								   error={this.props.error}
								   isLoading={this.props.isLoading}
								   post={this.props.postSuperorder}
								   goBack={this.props.goBack}
								   id={this.props.id}
		/>;
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SetSuperorderContainer);
