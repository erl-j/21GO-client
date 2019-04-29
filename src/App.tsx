import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import CatalogContainer from './Scenes/Catalog/CatalogContainer';
import SetOrderContainer from './Scenes/SetOrder/SetOrderContainer';
import SetSuperorderContainer from './Scenes/SetSuperorder/SetSuperorderContainer';
import UserAccount from './Scenes/UserAccount/UserAccount';
import Welcome, {WelcomeMode} from "./Scenes/Welcome/Welcome";
import loadJwt from "./helpers/loadJwt";

class App extends React.Component {
	public render() {
		return (
			<Switch>
				<Route path="/catalog" render={props => <CatalogContainer {...props} />} />
				<RestrictedRoute loggedIn={false} path="/signIn" render={ props => <Welcome {...props} mode={WelcomeMode.SIGN_IN} />}  />
				<RestrictedRoute loggedIn={false} path="/signUp" render={props => <Welcome {...props} mode={WelcomeMode.SIGN_UP} />}  />
				<RestrictedRoute loggedIn={true} path="/setOrder/:id" render={props => <SetOrderContainer {...props} />} />
				<RestrictedRoute loggedIn={true} path="/setSuperorder" render={props => <SetSuperorderContainer {...props}  />} />
				<RestrictedRoute loggedIn={true} path="/account/:mode" render={props => <UserAccount {...props} />} />
				<Route render = {() => <Redirect to="/catalog"/>}/>
			</Switch>
		);
	}
}

export default App;

function RestrictedRoute ({loggedIn, path, render, ...rest}) {
	return (
		<Route
			{...rest}
			path={path}
			render={(props) => (loadJwt() != null) === loggedIn
				? render(props)
				: <Redirect to={{pathname: '/catalog'}} />}
		/>
	)
}