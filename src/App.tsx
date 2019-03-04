import './App.css';
import * as React from 'react';
import { Route } from 'react-router-dom';
import {Welcome} from './Scenes/Welcome/Welcome';
import SignInContainer from './Scenes/SignIn/SignInContainer';

// function mapStateToProps({ isActivated }: IStoreState) {
// 	return {
// 		isActivated,
// 	};
// }
// function mapDispatchToProps(dispatch: Dispatch<actions.ActivationAction>) {
// 	return {
// 		onActivate: () => dispatch(actions.activate()),
// 		onDeactivate: () => dispatch(actions.deactivate()),
// 	};
// }

// interface IAppProps {
// 	isActivated: boolean;
// 	onActivate: any;
// 	onDeactivate: any;
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(App);

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<Route exact={true} path="/" component={Welcome} />
				<Route path="/signIn" component={SignInContainer} />
			</React.Fragment>
		);
	}
}

export default App;
