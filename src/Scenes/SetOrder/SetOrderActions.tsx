import { BASE_URL } from '../../constants/index';
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
	console.log('got id ' + id);
	return (dispatch: any) => {
		dispatch(getSuperorderBegin());
		return fetch(BASE_URL + '/superOrder/' + id, {
			method: 'GET',
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client,
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(getSuperorderSuccess(json));
				console.log(json);
				return json;
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

	attributes={ 
		"superOrderId": id,
		"dispatch": "PICKUP",
		"items": [
			{
			"additionalInfo":(attributes.url+" "+attributes.details),
			"quantity":attributes.amount
			}
		]
	};

	console.log(attributes);
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

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {

	
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}



export function editOrder(id,attributes) {
	console.log('got attributes ' + attributes);
	return (dispatch: any) => {
		dispatch(setLocalOrder(attributes));
		dispatch(postOrderBegin());
		return fetch(BASE_URL + '/superOrder/', {
			method: 'POST',
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				auth: loadJwt(),
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client,
			body: JSON.stringify(attributes),
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(postOrderSuccess(json.id));
				console.log(json.id);
				return json;
			})
			.catch(error => dispatch(postOrderFailure(error,null)));
	};
}
