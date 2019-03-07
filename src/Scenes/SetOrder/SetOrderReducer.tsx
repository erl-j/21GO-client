import { GET_SUPERORDER_BEGIN, GET_SUPERORDER_SUCCESS, GET_SUPERORDER_FAILURE } from './SetOrderActions';

const initialState = {
	superorder:{},
	loading: false,
    error: null,
};
export default function setOrderReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_SUPERORDER_BEGIN:
			return { ...state, error: null, loading: true ,superorder:{}};
		case GET_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		case GET_SUPERORDER_SUCCESS:
			return { ...state, loading: false, superorder: action.payload.result };
		default:
			return state;
	}
}
