import * as React from 'react';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import UserOrdersContainer from './UserOrders/UserOrdersContainer';
import Navbar from '../../Components/Navbar';
import UserSuperordersContainer from "./UserSuperorders/UserSuperordersContainer";


const UserAccount = (props) => {
	enum Mode {
		PROFILE = "profile",
		ORDERS = "orders",
		SUPERORDERS = "superorders",
	}

	const tabs = [
		{ title: 'My Profile', mode: Mode.PROFILE },
		{ title: 'My Orders', mode: Mode.ORDERS },
		{ title: 'My Superorders', mode: Mode.SUPERORDERS },
	];

	const displayTab = currentMode => {
		let cnt = <span />;
		switch (currentMode) {
			case Mode.PROFILE:
				cnt = <UserProfileContainer />;
				break;
			case Mode.ORDERS:
				cnt = <UserOrdersContainer/>;
				break;
			case Mode.SUPERORDERS:
				cnt = <UserSuperordersContainer/>;
			default:
				break;
		}
		return cnt;
	};

	const button = 'button1 ';
	const modeKey = "mode";

	const urlParam = props.match.params[modeKey];
	let el: Mode = Mode.PROFILE;

	switch(urlParam){
		case "orders":
			el = Mode.ORDERS;
			break;
		case "superorders":
			el = Mode.SUPERORDERS;
			break;
		default: el = Mode.PROFILE;
	} //ugly but Mode[urlParam] doesn't work..

	const [mode, setMode] = React.useState(el);

	return (
		<React.Fragment>
			<Navbar isCatalog={false} />
			{tabs.map(t => (
				<button
					key={t.title}
					className={button + (mode === t.mode ? 'active' : '')}
					onClick={e => {
						setMode(t.mode);
						props.history.push('/account/' + t.mode.toString());
					}}
				>
					{t.title}
				</button>
			))}

			{displayTab(mode)}
		</React.Fragment>
	);
};

export default UserAccount;
