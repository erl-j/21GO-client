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

	const tabs = {};
	tabs[Mode.PROFILE] = {title: "My Profile", content: <UserProfileContainer {...props} />};
	tabs[Mode.ORDERS] = {title: "My Orders", content: <UserOrdersContainer {...props} />};
	tabs[Mode.SUPERORDERS] = {title: "My Superorders", content: <UserSuperordersContainer {...props} />};

	const button = 'button3 ';
	const urlParam = props.match.params.mode!;
	const [mode, setMode] = React.useState(urlParam as Mode || Mode.PROFILE);

	return (
		<div className="account">
			<Navbar isCatalog={false} {...props}/>
			<div className="account-tab">
				{Object.keys(tabs).map(t => (
					<button
						key={tabs[t].title}
						className={button + (mode === t ? 'active' : '')}
						onClick={() => {
							setMode(t as Mode);
							props.history.push('/account/' + t.toString());
						}}
					>
						{tabs[t].title}
					</button>
				))}
			</div>
			<div className="account-content">
				{tabs[mode].content}
			</div>
		</div>
	);
};

export default UserAccount;
