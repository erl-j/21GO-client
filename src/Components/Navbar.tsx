import * as React from 'react';
import searchIcon from '../img/icons/search.svg';
import userIcon from '../img/icons/user.svg';
import loadJwt, {clearJwt, loadUsername} from "../helpers/loadJwt";
import {RouteComponentProps} from "react-router";

class Navbar extends React.Component< { isCatalog: boolean } & RouteComponentProps<{}>,
    { search: string, visible: boolean, loggedIn: boolean, username: string | null}>{

    constructor(props) {
        super(props);

        this.state = {
            search: "",
            visible: false,
            loggedIn: loadJwt() != null,
            username: loadUsername()
        }
    }

    public render() {

        let content;


        if(this.state.loggedIn){
            content =
                <React.Fragment>
                    <h3>Hi, {this.state.username}</h3>
                    <ul className="semi-bold">
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
                    <ul className="semi-bold">
                        <li><a href="/signIn">Sign In</a></li>
                        <li><a href="/signUp">Sign Up</a></li>
                    </ul>
                </React.Fragment>
            );
        }

        let navAccountClass = '';
        if(this.state.visible) {
          navAccountClass = 'nav-account visible';
        } else {
          navAccountClass = 'nav-account';
        }

        if(this.state.loggedIn) {
          navAccountClass += ' loggedIn';
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

                <div className={navAccountClass}>
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
        this.setState({loggedIn: !this.state.loggedIn, username: null});
        this.props.history.push("/catalog");
    };

}

export default Navbar;
