import loadJwt from '../../helpers/loadJwt';
import {APICall, Method} from "../../apiCall";

export const GET_SUPERORDER_BEGIN = 'GET_SUPERORDER_BEGIN';
export const GET_SUPERORDER_FAILURE = 'GET_SUPERORDER_FAILURE';
export const GET_SUPERORDER_SUCCESS = 'GET_SUPERORDER_SUCCESS';

export const POST_ORDER_BEGIN = 'POST_ORDER_BEGIN';
export const POST_ORDER_FAILURE = 'POST_ORDER_FAILURE';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';

// Sets the given superorder attribute list to be stored
export const SET_LOCAL_ORDER = 'SET_LOCAL_ORDER';

export const getSuperorderBegin = () => ({
	type: GET_SUPERORDER_BEGIN
});

export const getSuperorderSuccess = result => ({
	type: GET_SUPERORDER_SUCCESS,
	payload: { result },
});

export const getSuperorderFailure = (error: string) => ({
	type: GET_SUPERORDER_FAILURE,
	payload: { error },
});

export function getSuperorder(id) {
	return (dispatch: any) => {
		dispatch(getSuperorderBegin());
		return APICall(Method.GET, '/superOrder/' + id, null, loadJwt())
			.then(obj => {
				dispatch(getSuperorderSuccess(obj));
				return obj;
			})
			.catch(error => dispatch(getSuperorderFailure(error)));
	};
}

export const setLocalOrder = attributes => ({
	type: SET_LOCAL_ORDER,
	payload: { attributes },
});

export const postOrderBegin = () => ({
	type: POST_ORDER_BEGIN,
});

export const postOrderSuccess = id => ({
	type: POST_ORDER_SUCCESS,
	payload: { id },
});

export const postOrderFailure = (error: any,details:any) => ({
	type: POST_ORDER_FAILURE,
	payload: { error,details },
});

export function postOrder(id,attributes) {

	attributes = {
		"superOrderId": id,
		"dispatch": "PICKUP",
		"items": [
			{
			"additionalInfo":(attributes.url+" "+attributes.details),
			"quantity":attributes.amount
			}
		]
	};

	return (dispatch: any) => {
		dispatch(setLocalOrder(attributes));
		dispatch(postOrderBegin());
		return APICall(Method.POST, '/order/',attributes,loadJwt())
		.then(json => {
			dispatch(postOrderSuccess(json.id));
			return json;
		})
		.catch(error=>dispatch(postOrderFailure(error,null)));
	};
}

export function editOrder(id,attributes) {
	return (dispatch: any) => {
		dispatch(setLocalOrder(attributes));
		dispatch(postOrderBegin());

		return APICall(Method.POST, '/superOrder',attributes,loadJwt())
			.then(json => {
				dispatch(postOrderSuccess(json.id));
				return json;
			})
			.catch(error => dispatch(postOrderFailure(error,null)));
	};
}
