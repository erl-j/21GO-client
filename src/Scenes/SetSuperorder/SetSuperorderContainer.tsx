import * as React from 'react';
import SuperorderEditable from 'src/Scenes/SetSuperorder/SuperorderEditable';
import * as actions from 'src/Scenes/SetSuperorder/SetSuperorderActions';
import {connect} from "react-redux";

interface ISetSuperorderContainerProps{
	attributes:any,
	postSuperorder:any,
	fetchSuperorder:any,
	isLoading:any,
	error:any,
}

const mapDispatchToProps=(dispatch)=>({
	postSuperorder:(attributes)=>dispatch(actions.postSuperorder(attributes)),
	fetchSuperorder:(id)=>dispatch(actions.getSuperorder(id)),
	// setSuperorder:(attributes,id)=>dispatch((actions.setSuperorder))
})

const mapStateToProps=(state)=>({
	attributes:(state.setSuperorder.attributes),
	isLoading:state.setSuperorder.loading,
	error:state.setSuperorder.error
})

class SetSuperorderContainer extends React.Component<ISetSuperorderContainerProps>{
	public render() {
		return <SuperorderEditable attributes={this.props.attributes} error={this.props.error} isLoading={this.props.isLoading} post={this.props.postSuperorder}/>;
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SetSuperorderContainer);
