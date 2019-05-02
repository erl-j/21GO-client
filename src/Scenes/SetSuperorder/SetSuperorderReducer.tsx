import {
	POST_SUPERORDER_BEGIN,
	POST_SUPERORDER_SUCCESS,
	POST_SUPERORDER_FAILURE,
	EDIT_SUPERORDER_IMAGE_BEGIN,
	EDIT_SUPERORDER_IMAGE_SUCCESS,
	EDIT_SUPERORDER_IMAGE_FAILURE,

} from './SetSuperorderActions';

const initialState = {
	attributes: { storeURL: '', storeLocation: '', deadline: '', storeName: '',
				arrivalLocation: '', availableDispatch: 'PICKUP', tags: '' },
	loading: false,
	error: null,
	id: null,
};

export default function setSuperOrderReducer(state = initialState, action: any) {
	switch (action.type) {
		case POST_SUPERORDER_BEGIN:
			return { ...state, loading: true };
		case POST_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case POST_SUPERORDER_SUCCESS:
			return { ...state, loading: false, id: action.payload.id, error: null};
		case EDIT_SUPERORDER_IMAGE_BEGIN:
			return { ...state, loading: true, id: action.payload };
		case EDIT_SUPERORDER_IMAGE_SUCCESS:
			return { ...state, loading: false, id: action.payload.id, error: null};
		case EDIT_SUPERORDER_IMAGE_FAILURE:
			return { ...state, loading: false, error: action.payload.error };
		default:
			return state;
	}
}
