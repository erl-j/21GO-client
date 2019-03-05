import { BASE_URL } from '../../constants/index';

const SEARCH_SUPERORDERS_BEGIN="SEARCH_SUPERORDERS_BEGIN";
const SEARCH_SUPERORDERS_FAILURE="SEARCH_SUPERORDERS_FAILURE";
const SEARCH_SUPERORDERS_SUCCESS="SEARCH_SUPERORDERS_SUCESS";

export const searchSuperordersBegin = () => ({
	type: SEARCH_SUPERORDERS_BEGIN,
});

export const searchSuperordersSuccess = (ids: number[]) => ({
	type: SEARCH_SUPERORDERS_SUCCESS,
	payload: { ids },
});

export const searchSuperordersFailure = (error: string) => ({
	type: SEARCH_SUPERORDERS_FAILURE,
	payload: { error },
});

export function searchSuperOrders(searchParams) {
	return (dispatch: any) => {
		dispatch(searchSuperordersBegin());
		return fetch(BASE_URL + '/superorders/search', {
			method: 'POST',
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				// "Content-Type": "application/x-www-form-urlencoded",
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client,
			body: JSON.stringify(searchParams),
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(searchSuperordersSuccess(json.jwt));
				return json.jwt;
			})
			.catch(error => dispatch(searchSuperordersFailure(error)));
	};
}

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}


