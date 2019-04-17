import {APICall, Method} from "../../../apiCall";

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

		return APICall(Method.POST,'/register', params, null)
			.then(() => {
				dispatch(signUpSuccess());
				ownProps.history.push(`/signIn`);
				return;
			})
			.catch(error => dispatch(signUpFailure(error)));
	};
}

