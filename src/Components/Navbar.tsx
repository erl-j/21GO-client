import * as React from 'react';
import searchIcon from '../img/icons/search.svg';
import userIcon from '../img/icons/user.svg';
import loadJwt, {clearJwt, loadUser} from "../helpers/loadJwt";
import Loader from "./Loader";
import {RouteComponentProps} from "react-router";

class Navbar extends React.Component< { isCatalog: boolean } & RouteComponentProps<{}>,
    { search: string, visible: boolean, loggedIn: boolean, user: any, loading: boolean} > {

    constructor(props) {
        super(props);

        this.state = {
            search: "",
            visible: false,
            loggedIn: false,
            user: null,
            loading: true
        }
    }

    public async componentDidMount(){
        console.log(loadJwt());
        const user = await loadUser();
        console.log(user);
        this.setState({user, loggedIn: user != null, loading: false});
    }

    public render() {

        let content;

        if(this.state.loading){
            content = <Loader/>;
        }
        else if(this.state.loggedIn){
            content =
                <React.Fragment>
                    <h3>Hi, {this.state.user.firstName}!</h3>
                    <ul>
                        <li><a href="/account/profile">Profile</a></li>
                        <li><a href="/account/orders">Orders</a></li>
                        <li><a href="/account/superorders">Superorders</a></li>
                        <li><a href="" onClick={this.onLogOut}>Log Out</a></li>
                    </ul>
                </React.Fragment>
        }
        else{
            content = (
                <React.Fragment>
                    <h3>Hi!</h3>
                    <ul>
                        <li><a href="/signIn">Sign In</a></li>
                        <li><a href="/signUp">Sign Up</a></li>
                    </ul>
                </React.Fragment>
            );
        }

        return (

            <div className={this.props.isCatalog ? "navbar" : "navbar border"}>
                <div className="nav-content">
                    <div className="box1">
                        <a href="/catalog"><img className="logo"/></a>
                    </div>
                    <div className="box2">
                        <img src={userIcon} alt="User" onClick={this.handleClick}/>
                        <form className="element-to-display" action="/catalog">
                            <input type="search" name="search" placeholder="Search"
                                   onChange={e => this.setState({search: e.target.value})}/>
                            <button type="submit" onClick={this.handleSubmit}>
                                <img src={searchIcon} alt="Search"/>
                            </button>
                        </form>
                    </div>
                </div>

                <div className={this.state.visible ? "nav-account visible" : "nav-account"}>
                    {content}
                </div>
            </div>)

    }

    private handleSubmit = event => {
        if (this.props.isCatalog) {
            event.preventDefault();
            console.log(this.state.search);
        } else {
            console.log("Redirecting");
        }
    };

    private handleClick = () => {
        this.setState({visible: !this.state.visible});
    };

    private onLogOut = () => {
        clearJwt();
        this.setState({loggedIn: !this.state.loggedIn});
        this.setState({user: null});
        this.props.history.push("/catalog");
    };

}

export default Navbar;
