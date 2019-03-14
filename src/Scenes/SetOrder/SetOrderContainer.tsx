import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import SuperorderInspect from 'src/Superorder/SuperorderInspect';
import * as actions from "src/Scenes/SetSuperorder/SetSuperorderActions";
import {RouteComponentProps} from "react-router";
import {connect} from "react-redux";

const mapStateToProps=(state)=>(
    {
        superorder:state.superorder.attributes
    });
const mapDispatchToProps=(dispatch)=>({
    getSuperorder:(id)=>dispatch(actions.getSuperorder(id))
});

interface ISetOrderContainerProps{
    superorder:any,
    getSuperorder:any
}

class SetOrderContainer extends React.Component<RouteComponentProps & ISetOrderContainerProps> {
    public componentDidMount(){
        const {id}:any=this.props.match.params;
        this.props.getSuperorder(id);
    }
	public render() {
        // This next line is a hack. I am unable to properly type this.props.match so this will have to do.
        return(
		<div className="row">

			<div className="col-6">
            <SuperorderInspect {...this.props.superorder}/>
            </div>

			<div className="col-6"/>
        </div>
        );
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SetOrderContainer);