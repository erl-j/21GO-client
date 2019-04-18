import {
	GET_SUPERORDER_BEGIN,
	GET_SUPERORDER_SUCCESS,
	GET_SUPERORDER_FAILURE,
	SET_LOCAL_SUPERORDER,
	POST_SUPERORDER_BEGIN,
	POST_SUPERORDER_SUCCESS,
	POST_SUPERORDER_FAILURE,
} from './SetSuperorderActions';

const initialState = {
	attributes: { storeURL: '', storeLocation: '', deadline: '', storeName: '', arrivalLocation: '', availableDispatch: '', tags: '' },
	loading: false,
	error: null,
	isRemote: false,
	id: null,
	validationDetails:null
};
export default function setSuperOrderReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_SUPERORDER_BEGIN:
			return { ...state, error: null, loading: true, attributes: {} };
		case GET_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		case GET_SUPERORDER_SUCCESS:
			return {
				...state,
				loading: false,
				attributes: action.payload.result,
				isRemote: true,
				id: action.payload.result.id,
			};
		case SET_LOCAL_SUPERORDER:
			return { ...state, loading: false, attributes: action.payload.attributes };
		case POST_SUPERORDER_BEGIN:
			return { ...state, loading: true };
		case POST_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error.toString(), validationDetails:action.payload.details};
		case POST_SUPERORDER_SUCCESS:
			return { ...state, loading: false, id: action.payload.id, isRemote: true };
		default:
			return state;
	}
}
