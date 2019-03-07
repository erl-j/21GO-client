import * as React from 'react';
import { Link } from 'react-router-dom';
export const Welcome = () => (
	<div>
		<p>Hello there, welcome to 21go</p>
		<Link to="/signIn">
			<button>Sign in</button>
		</Link>
		<Link to="/signUp">
			<button>Sign up</button>
		</Link>
		<Link to="/setSuperorder">
			<button>initiate order</button>
		</Link>
	</div>
);
