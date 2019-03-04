import * as React from "react";
import { RouteComponentProps } from 'react-router';

// Typescript doesn't think match.params has key location.. Need to figure out a hack for this one.

class CatalogContainer extends React.Component<RouteComponentProps>{

    public render(){
        console.log(this.props.match.params);
        return (
        <div>
            <h3>This is a catalog search for {Object.values(this.props.match.params).map(loc=>"loc:"+loc)}</h3>
        </div>);

    }
}

export default CatalogContainer;