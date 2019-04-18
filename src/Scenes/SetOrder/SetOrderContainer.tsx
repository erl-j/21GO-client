import * as React from 'react';
import * as actions from "./SetOrderActions";
import {RouteComponentProps} from "react-router";
import {connect} from "react-redux";
import ItemForm from "./ItemForm";
import Navbar from '../../Components/Navbar';
import SuperorderInspect from "../../Superorder/SuperorderInspect";
import Loader from "../../Components/Loader";

const mapStateToProps=(state)=>({
    superorder:state.setOrder.attributes,
    items:state.setOrder.items,
    isLoading: state.setOrder.loading
});

const mapDispatchToProps=(dispatch)=>({
    getSuperorder:(id)=>dispatch(actions.getSuperorder(id)),
    postOrder:(id,details)=>dispatch(actions.postOrder(id,details)),
});

interface ISetOrderContainerProps{
    superorder:any,
    getSuperorder:any,
    items:any,
    postOrder:any,
    isLoading:boolean
}

class SetOrderContainer extends React.Component<RouteComponentProps & ISetOrderContainerProps> {

  public componentDidMount(){
      const id="id";
      const superorderId = this.props.match.params[id];
      this.props.getSuperorder(superorderId);
  }

  public render() {

      if(this.props.isLoading){

          return (<div className="setOrder">
                    <Navbar isCatalog={false} />
                    <Loader/>
                </div>);

      }

        return (
            <div className="setOrder">
                <Navbar isCatalog={false} />
                <div>
                    <SuperorderInspect superorder={this.props.superorder}/>

                    {
                        this.props.items.map((attributes,idx) =>
                        <ItemForm key={idx} itemAttributes={attributes} post={(e) =>
                            this.props.postOrder(this.props.match.params,e)}/> )
                    }

                    <ItemForm key={-1} post={e=>this.props.postOrder(this.props.match.params,e)}/>
                </div>
          </div>);
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetOrderContainer);
