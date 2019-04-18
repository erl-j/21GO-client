import { FETCH_ACCOUNT_BEGIN, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILURE } from './UserProfileActions';

const initialState = {
	results: [],
	loading: true,
	error: null,
};

export default function userOrdersReducer(state = initialState, action: any) {
	switch (action.type) {
		case FETCH_ACCOUNT_BEGIN:
			return {...state, error: null, loading: true, results:[]};
		case FETCH_ACCOUNT_FAILURE:
			return {...state, loading: false, error: action.payload.error};
		case FETCH_ACCOUNT_SUCCESS:
			return {...state, loading: false, results: action.payload.results};
		default:
			return state;
	}
}
