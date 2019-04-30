import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const FETCH_ACCOUNT_BEGIN = 'FETCH_ACCOUNT_BEGIN';
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';

export const EDIT_USER_BEGIN = 'EDIT_USER_BEGIN';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';

const editUserBegin = () => ({
	type: EDIT_USER_BEGIN
});

const editUserFailure = (error) => ({
	type: EDIT_USER_FAILURE,
	payload: { error },
});

const editUserSuccess = (results) => ({
	type: EDIT_USER_SUCCESS,
	payload: { results },
});

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

export function editUser(attributes){

	return (dispatch: any) => {
		dispatch(editUserBegin());

		APICall(Method.PUT, "/user/profile", attributes, loadJwt()).then((res) => {
			console.log(res);
			dispatch(editUserSuccess(res.profile));
		}).catch((err) => {
			dispatch(editUserFailure(err));
		});
	};

}

export function editImage(imageUrl){
	const attributes = {
		"username": null,
		"firstName": null,
		"lastName": null,
		"mail": null,
		"location": null,
		"phone": null,
		"imageUrl": imageUrl
	};
	return editUser(attributes);
}