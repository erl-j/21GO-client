import { BASE_URL } from '../../constants/index';

export const SEARCH_SUPERORDERS_BEGIN="SEARCH_SUPERORDERS_BEGIN";
export const SEARCH_SUPERORDERS_FAILURE="SEARCH_SUPERORDERS_FAILURE";
export const SEARCH_SUPERORDERS_SUCCESS="SEARCH_SUPERORDERS_SUCCESS";

export const searchSuperordersBegin = () => ({
	type: SEARCH_SUPERORDERS_BEGIN,
});

export const searchSuperordersSuccess = (results:object[]) => ({
	type: SEARCH_SUPERORDERS_SUCCESS,
	payload: { results },
});

export const searchSuperordersFailure = (error: string) => ({
	type: SEARCH_SUPERORDERS_FAILURE,
	payload: { error },
});

export function searchSuperOrders(searchParams) {
	return (dispatch: any) => {
		dispatch(searchSuperordersBegin());
		return fetch(BASE_URL + '/superOrder/search?', {
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
				dispatch(searchSuperordersSuccess(json.superOrders));
				return json;
			})
			.catch(error => dispatch(searchSuperordersFailure(error.message)));
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
	
	if (!response.ok) {
		console.log(response);
		throw Error(response.statusText);
	}
	return response;
}


