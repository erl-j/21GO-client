import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const FETCH_ACCOUNT_BEGIN = 'SEARCH_SUPERORDERS_BEGIN';
export const FETCH_ACCOUNT_FAILURE = 'SEARCH_SUPERORDERS_FAILURE';
export const FETCH_ACCOUNT_SUCCESS = 'SEARCH_SUPERORDERS_SUCCESS';

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
				dispatch(fetchAccountSuccess(res));
				return;
			})
			.catch(error => dispatch(fetchAccountFailure(error)));
	};
}
