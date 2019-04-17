import {APICall, Method} from "../../apiCall";

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

		return APICall(Method.GET, '/superOrder/search?')
			.then(json => {
				dispatch(searchSuperordersSuccess(json.superOrders));
				return json;
			})
			.catch(error => dispatch(searchSuperordersFailure(error.message)));
	};
}


