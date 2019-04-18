import {APICall, Method} from "../../../apiCall";

export const SIGN_IN_BEGIN = 'SIGN_IN_BEGIN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const signInBegin = () => ({
	type: SIGN_IN_BEGIN,
});

export const signInSuccess = (jwt: string) => ({
	type: SIGN_IN_SUCCESS,
	payload: { jwt },
});

export const signInFailure = (error: string) => ({
	type: SIGN_IN_FAILURE,
	payload: { error },
});

export function fetchJwt(usernameIn: string, passwordIn: string) {
	console.warn('sent login request for un/pw: ' + usernameIn + '/' + passwordIn);
	return (dispatch: any) => {
		dispatch(signInBegin());
		const body = {username: usernameIn, password: passwordIn};

		return APICall(Method.POST, "/login", body, null)
			.then(json => {
				dispatch(signInSuccess(json.jwt));
				localStorage.setItem("user",JSON.stringify({"token":json.jwt,"username":usernameIn}));
				return json.jwt;
			})
			.catch(error => dispatch(signInFailure(error)));
	};
}
