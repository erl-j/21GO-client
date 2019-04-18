import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const FETCH_ACCOUNT_BEGIN = 'FETCH_ACCOUNT_BEGIN';
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';

const fetchAccountBegin = () => ({
	type: FETCH_ACCOUNT_BEGIN
});

const fetchAccountFailure = (error) => ({
	type: FETCH_ACCOUNT_FAILURE,
	payload: { error },
});

const fetchAccountSuccess = (results) => ({
	type: FETCH_ACCOUNT_SUCCESS,
	payload: { results },
});

export function fetchAccount(){
	return (dispatch: any) => {
		dispatch(fetchAccountBegin());
		return APICall(Method.GET,'/user/profile', null, loadJwt())
			.then((res) => {
				dispatch(fetchAccountSuccess(res.profile));
				return res.profile;
			})
			.catch(error => dispatch(fetchAccountFailure(error)));
	};
}
