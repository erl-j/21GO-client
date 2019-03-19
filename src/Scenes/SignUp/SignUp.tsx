import * as React from 'react';
import { useState } from 'react';
import ValidatedInput from 'src/Components/ValidatedInput';
import Loader from '../../Components/Loader';

const SignUp = ({ onSignUpPressed, isSignUpLoading }) => {
	const [params, setParam] = useState({
		username: '',
		firstName: '',
		lastName: '',
		password: '',
		mail: '',
		phone: '',
		location: '',
	});

	let content;
	if(isSignUpLoading) {
		content = <Loader />;
	} else {
		content = <form className="welcome-form" onSubmit={(e) => {e.preventDefault(); onSignUpPressed(params)}}>
								{Object.keys(params).map(k => (
									<React.Fragment>
										<ValidatedInput name={k} onChange={e =>
											setParam(
												{...params, [k]: e.target.value}
											)
										}/>
										<br />
									</React.Fragment>
								))}
								<input className="button2" type="submit" value="Submit" />
							</form>;
	}

	return (
		<div>
			{content}
		</div>
	);
};

export default SignUp;
