import {
	GET_SUPERORDER_BEGIN,
	GET_SUPERORDER_SUCCESS,
	GET_SUPERORDER_FAILURE,
	SET_LOCAL_ORDER,
	POST_ORDER_BEGIN,
	POST_ORDER_SUCCESS,
	POST_ORDER_FAILURE,
} from './SetOrderActions';

const initialState = {
	superOrderAttributes:{storeURL: '', storeLocation: '', deadline: '', arrivalLocation: '', availableDispatch: '', tags: '' },
	items:[],
	loading: false,
	error: null,
	isRemote: false,
	id: null,
	validationDetails:null
};
export default function setOrderReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_SUPERORDER_BEGIN:
			return { ...state, error: null, loading: true, attributes: {} };
		case GET_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		case GET_SUPERORDER_SUCCESS:
			return {
				...state,
				loading: false,
				attributes: action.payload.result.superOrder,
				isRemote: true,
				id: action.payload.result.id,
			};
		case SET_LOCAL_ORDER:
			return { ...state, loading: false, orderAttributes: action.payload.attributes };
		case POST_ORDER_BEGIN:
			return { ...state, loading: true };
		case POST_ORDER_FAILURE:
			console.log(action.payload.error);
			return { ...state, loading: false, error: action.payload.error.toString(), validationDetails:action.payload.details};
		case POST_ORDER_SUCCESS:
			return { ...state, loading: false, id: action.payload.id, isRemote: true };
		default:
			return state;
	}
}
