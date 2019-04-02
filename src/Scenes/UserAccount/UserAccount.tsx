import * as React from 'react';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import UserOrdersContainer from './UserOrders/UserOrdersContainer';
import Navbar from '../../Components/Navbar';

const UserAccount = () => {
	enum modes {
		account,
		orders,
		superorders,
	}

	const tabs = [
		{ title: 'My Profile', mode: modes.account },
		{ title: 'My Orders', mode: modes.orders },
		{ title: 'My Superorders', mode: modes.superorders },
	];

	const displayTab = currentMode => {
		let cnt = <span />;
		switch (currentMode) {
			case modes.account:
				cnt = <UserProfileContainer />;
				break;
			case modes.orders:
				cnt = <UserOrdersContainer/>;
				break;
			case modes.superorders:
				cnt = <h1>superorders</h1>;
			default:
				break;
		}
		return cnt;
	};

	const button = 'button1 ';
	const [mode, setMode] = React.useState(modes.account);

	return (
		<React.Fragment>
			<Navbar isCatalog={false} />
			{tabs.map(t => (
				<button
					key={t.title}
					className={button + (mode === t.mode ? 'active' : '')}
					onClick={e => setMode(t.mode)}
				>
					{t.title}
				</button>
			))}

			{displayTab(mode)}
		</React.Fragment>
	);
};

export default UserAccount;
