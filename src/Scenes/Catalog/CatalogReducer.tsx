import { SEARCH_SUPERORDERS_BEGIN, SEARCH_SUPERORDERS_SUCCESS, SEARCH_SUPERORDERS_FAILURE } from './CatalogActions';

const initialState = {
	results:[],
	loading: false,
    error: null,
};
export default function catalogReducer(state = initialState, action: any) {
	switch (action.type) {
		case SEARCH_SUPERORDERS_BEGIN:
			return { ...state, error: null, loading: true ,results:[]};
		case SEARCH_SUPERORDERS_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		case SEARCH_SUPERORDERS_SUCCESS:
			return { ...state, loading: false, results: action.payload.results };
		default:
			return state;
	}
}
