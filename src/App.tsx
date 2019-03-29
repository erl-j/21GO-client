import './App.css';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Welcome } from './Scenes/Welcome/Welcome';
// import SignInContainer from './Scenes/SignIn/SignInContainer';
// import SignUpContainer from './Scenes/SignUp/SignUpContainer';
import CatalogContainer from './Scenes/Catalog/CatalogContainer';
import SetOrderContainer from './Scenes/SetOrder/SetOrderContainer';
import SetSuperorderContainer from './Scenes/SetSuperorder/SetSuperorderContainer';
import UserAccount from './Scenes/UserAccount/UserAccount';

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<Route exact={true} path="/" component={Welcome} />
				{/*<Route path="/signIn" component={SignInContainer} />*/}
				<Route path="/catalog" render={props => <CatalogContainer {...props} />} />
				{/*<Route path="/signUp" component={SignUpContainer} />*/}
				<Route path="/setOrder/:id" render={props => <SetOrderContainer {...props} />} />
				<Route path="/setSuperorder" component={SetSuperorderContainer} />
				<Route path="/account" component={UserAccount}/>
			</React.Fragment>
		);
	}
}

export default App;
