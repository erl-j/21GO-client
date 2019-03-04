import {BASE_URL} from "../../constants/index"

export const SIGN_IN_BEGIN = 'SIGN_IN_BEGIN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCESS';
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
		return fetch(BASE_URL+'/auth/login', {
			method: 'POST',
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client,
			body: JSON.stringify({ username: usernameIn, password: passwordIn }),
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(signInSuccess(json.jwt));
				return json.jwt;
			})
			.catch(error => dispatch(signInFailure(error)));
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
