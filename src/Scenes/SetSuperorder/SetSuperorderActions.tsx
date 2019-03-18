import { BASE_URL } from '../../constants/index';
import loadJwt from '../../helpers/loadJwt';

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

export function postSuperorder(attributes) {
	console.log('got attributes ' + attributes);
	return (dispatch: any) => {
		dispatch(setLocalSuperorder(attributes));
		dispatch(postSuperorderBegin());
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
		}).then(res=>handlePostResponse(res,dispatch))
		.catch(error=>dispatch(postSuperorderFailure(error,null)));
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {

	console.log("hek");
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

function handlePostResponse(response:any,dispatch:any){
	console.log("hello");
	if (!response.ok) {
		if(response.status===400){
			response.json()
			.then(json=>dispatch(postSuperorderFailure(response.statusText,json)))
		}
		else{
		throw Error(response.statusText);
		}
	}
	else{
		response.json().
		then(json => {
		dispatch(postSuperorderSuccess(json.id));
		console.log(json.id);
		})
	}
	console.log("hello");
	return "";
}

export function editSuperorder(attributes) {
	console.log('got attributes ' + attributes);
	return (dispatch: any) => {
		dispatch(setLocalSuperorder(attributes));
		dispatch(postSuperorderBegin());
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
				dispatch(postSuperorderSuccess(json.id));
				console.log(json.id);
				return json;
			})
			.catch(error => dispatch(postSuperorderFailure(error,null)));
	};
}