import { BASE_URL } from '../../../constants/index';

export const SIGN_UP_BEGIN = 'SIGN_UP_BEGIN';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpBegin = () => ({
	type: SIGN_UP_BEGIN,
});

export const signUpSuccess = () => ({
	type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (error: string) => ({
    type: SIGN_UP_FAILURE,
    payload: {error}
});

export function createUser(params,ownProps) {
	return (dispatch: any) => {
		dispatch(signUpBegin());
		return fetch(BASE_URL + '/register', {
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
			body: JSON.stringify(params),
		})
			.then(handleErrors)
			.then(() => {
                dispatch(signUpSuccess());
                ownProps.history.push(`/signIn`)
				return ;
			})
			.catch(error => dispatch(signUpFailure(error)));
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
