import * as React from "react";
import { RouteComponentProps } from 'react-router';
import * as queryString from 'query-string';
import {Link} from 'react-router-dom';
import SuperorderContainer from '../../Superorder/SuperorderContainer';
import SuperorderSummary from '../../Superorder/SuperorderSummary';


class CatalogContainer extends React.Component<RouteComponentProps>{

    public render(){
        // This next line is a hack. I am unable to properly type this.props.match so this will have to do.
        // const {location}:any=this.props.match.params;
        const queryParameters=queryString.parse(this.props.location.search);
        return (
        <div>
            <h3>This is a catalog search with parameters</h3>
            {Object.keys(queryParameters).map(k=><li key={k+queryParameters[k]}>{k+": "+queryParameters[k]}</li>)}
            <Link to="/catalog?location=fresno">
                <button>go to fresno</button>
            </Link>
            <SuperorderContainer render={od=>(
                <SuperorderSummary {...od}/>
                )
            }/>
        </div>);

    }
}

export default CatalogContainer;