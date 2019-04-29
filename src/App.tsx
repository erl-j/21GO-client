import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import CatalogContainer from './Scenes/Catalog/CatalogContainer';
import SetOrderContainer from './Scenes/SetOrder/SetOrderContainer';
import SetSuperorderContainer from './Scenes/SetSuperorder/SetSuperorderContainer';
import UserAccount from './Scenes/UserAccount/UserAccount';
import Welcome, {WelcomeMode} from "./Scenes/Welcome/Welcome";
import loadJwt from "./helpers/loadJwt";

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>

				<Route exact={true} path="/" render = {() => {
					const loggedIn = loadJwt() != null;
					return loggedIn ? <Redirect to="/catalog"/> : <Redirect to="/signIn"/>
				}}/>
				<Route path="/signIn" render={ props => <Welcome {...props} mode={WelcomeMode.SIGN_IN} />}  />
				<Route path="/catalog" render={props => <CatalogContainer {...props} />} />
				<Route path="/signUp" render={props => <Welcome {...props} mode={WelcomeMode.SIGN_UP} />}  />
				<Route path="/setOrder/:id" render={props => <SetOrderContainer {...props} />} />
				<Route path="/setSuperorder" component={SetSuperorderContainer} />
				<Route path="/account/:mode" render={props => <UserAccount {...props} />} />
			</React.Fragment>
		);
	}
}

export default App;
