import { BASE_URL } from '../../constants/index';

export const GET_SUPERORDER_BEGIN="GET_SUPERORDER_BEGIN";
export const GET_SUPERORDER_FAILURE="GET_SUPERORDER_FAILURE";
export const GET_SUPERORDER_SUCCESS="GET_SUPERORDER_SUCCESS";

export const getSuperorderBegin = () => ({
	type: GET_SUPERORDER_BEGIN,
});

export const getSuperorderSuccess = (result) => ({
	type: GET_SUPERORDER_SUCCESS,
	payload: { result },
});

export const getSuperorderFailure = (error: string) => ({
	type: GET_SUPERORDER_FAILURE,
	payload: { error },
});

export function getSuperorder(id) {
    console.log("got id "+id);
	return (dispatch: any) => {
		dispatch(getSuperorderBegin());
		return fetch(BASE_URL + '/superOrder/'+id, {
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

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
	
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}


