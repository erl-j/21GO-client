import loadJwt from '../../helpers/loadJwt';
import {APICall, Method} from "../../apiCall";

export const GET_SUPERORDER_BEGIN = 'GET_SUPERORDER_BEGIN';
export const GET_SUPERORDER_FAILURE = 'GET_SUPERORDER_FAILURE';
export const GET_SUPERORDER_SUCCESS = 'GET_SUPERORDER_SUCCESS';

export const POST_SUPERORDER_BEGIN = 'POST_SUPERORDER_BEGIN';
export const POST_SUPERORDER_FAILURE = 'POST_SUPERORDER_FAILURE';
export const POST_SUPERORDER_SUCCESS = 'POST_SUPERORDER_SUCCESS';

// Sets the given superorder attribute list to be stored
export const SET_LOCAL_SUPERORDER = 'SET_LOCAL_SUPERORDER';

export const getSuperorderBegin = () => ({
	type: GET_SUPERORDER_BEGIN,
});

export const getSuperorderSuccess = result => ({
	type: GET_SUPERORDER_SUCCESS,
	payload: { result },
});

export const getSuperorderFailure = (error: string) => ({
	type: GET_SUPERORDER_FAILURE,
	payload: { error },
});

export const setLocalSuperorder = attributes => ({
	type: SET_LOCAL_SUPERORDER,
	payload: { attributes },
});

export const postSuperorderBegin = () => ({
	type: POST_SUPERORDER_BEGIN,
});

export const postSuperorderSuccess = id => ({
	type: POST_SUPERORDER_SUCCESS,
	payload: { id },
});

export const postSuperorderFailure = (error: any,details:any) => ({
	type: POST_SUPERORDER_FAILURE,
	payload: { error,details },
});

export function getSuperorder(id) {
	return (dispatch: any) => {
		dispatch(getSuperorderBegin());

		return APICall(Method.GET,  '/superOrder/' + id, null, loadJwt())
			.then(json => {
				dispatch(getSuperorderSuccess(json));
				return json;
			})
			.catch(error => dispatch(getSuperorderFailure(error)));
	};
}
export function postSuperorder(attributes) {
	return (dispatch: any) => {
		dispatch(setLocalSuperorder(attributes));
		dispatch(postSuperorderBegin());
		return APICall(Method.POST,  '/superOrder/', attributes, loadJwt())
			.then(body => {
				dispatch(postSuperorderSuccess(body.id));
			})
			.catch(error => {
				dispatch(postSuperorderFailure(error.message, error.details));
			});
	};
}

export function editSuperorderImage(id, imageUrl) {

	const attributes = {imageUrl};

	return (dispatch: any) => {
		dispatch(setLocalSuperorder(attributes));
		dispatch(postSuperorderBegin());
		return APICall(Method.PUT, '/superOrder/' + id, attributes, loadJwt())
			.then(json => {
				dispatch(postSuperorderSuccess(json.id));
				return json;
			})
			.catch(error => dispatch(postSuperorderFailure(error,error.details)));
	};
}
