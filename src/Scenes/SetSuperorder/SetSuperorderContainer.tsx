import * as React from 'react';
import SuperorderEditable from 'src/Superorder/SuperorderEditable';
import * as actions from 'src/Superorder/SuperorderActions';
import {connect} from "react-redux";

interface ISetSuperorderContainerProps{
	attributes:any,
	postSuperorder:any,
	fetchSuperorder:any,
}

const mapDispatchToProps=(dispatch)=>({
	postSuperorder:(attributes)=>dispatch(actions.postSuperorder(attributes)),
	fetchSuperorder:(id)=>dispatch(actions.getSuperorder(id)),
	// setSuperorder:(attributes,id)=>dispatch((actions.setSuperorder))
})

const mapStateToProps=(state)=>({
	attributes:state.superorder.attributes,
})

class SetSuperorderContainer extends React.Component<ISetSuperorderContainerProps>{
	public render() {
		return <SuperorderEditable attributes={this.props.attributes} post={this.props.postSuperorder}/>;
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SetSuperorderContainer);
