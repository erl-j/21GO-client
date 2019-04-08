import * as React from 'react';
import { useState } from 'react';
import ValidatedInput from 'src/Components/ValidatedInput';
import Loader from '../../../Components/Loader';
import validators from "../../../constants/validators";


const SignUp = ({ onSignUpPressed, isSignUpLoading }) => {

	const [params, setParam] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
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
											
										} validate={validators.signUp[k]}/>
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
