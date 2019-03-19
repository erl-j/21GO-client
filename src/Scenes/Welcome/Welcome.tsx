import * as React from 'react';
import { Link } from 'react-router-dom';
export const Welcome = () => (
	<div className="welcome">
		<div className="overlay" />
		<div className="contents">
		<img className="logo" />
			<p>- Hello there, welcome to 21go -</p>
			<Link to="/signIn">
				<button className="button1 active">Sign in</button>
			</Link>
			<Link to="/signUp">
				<button className="button1">Sign up</button>
			</Link>
			<Link to="/setSuperorder">
				<button>initiate order</button>
			</Link>
		</div>
	</div>
);
