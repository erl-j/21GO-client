import * as React from 'react';
import SuperorderInspect from 'src/Superorder/SuperorderInspect'
import * as actions from "src/Scenes/SetOrder/SetOrderActions";
import {RouteComponentProps} from "react-router";
import {connect} from "react-redux";
import ItemForm from "./ItemForm";

const mapStateToProps=(state)=>(
    {
        superorder:state.setOrder.attributes,
        items:state.setOrder.items
    });
const mapDispatchToProps=(dispatch)=>({
    getSuperorder:(id)=>dispatch(actions.getSuperorder(id))
});

interface ISetOrderContainerProps{
    superorder:any,
    getSuperorder:any,
    items:any
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

			<div>
            <SuperorderInspect {...this.props.superorder}/>
            
            {this.props.items.map((attributes,idx)=>
            <ItemForm key={idx} itemAttributes={attributes} post={e=>console.log("post order with attributes:"+e)}/> )}
            <ItemForm key={-1} post={e=>console.log("post order with attributes"+e)}/>
            </div>

		
        </div>
        );
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SetOrderContainer);
