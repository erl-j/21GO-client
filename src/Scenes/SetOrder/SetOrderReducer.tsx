import {
	GET_SUPERORDER_BEGIN,
	GET_SUPERORDER_SUCCESS,
	GET_SUPERORDER_FAILURE,
	POST_ORDER_BEGIN,
	POST_ORDER_SUCCESS,
	POST_ORDER_FAILURE,
	DELETE_ORDER_BEGIN,
	DELETE_ORDER_FAILURE,
	DELETE_ORDER_SUCCESS,
	EDIT_ORDER_STATUS_BEGIN,
	EDIT_ORDER_STATUS_FAILURE,
	EDIT_ORDER_STATUS_SUCCESS,
	DELETE_SUPERORDER_BEGIN,
	DELETE_SUPERORDER_FAILURE,
	DELETE_SUPERORDER_SUCCESS,
} from './SetOrderActions';

const initialState = {
	items:[],
	loading: false,
	error: null,
	id: null,
	superorder: {},
};
export default function setOrderReducer(state = initialState, action: any) {
	switch (action.type) {
		case GET_SUPERORDER_BEGIN:
			return { ...state, error: null, loading: true, attributes: {},  };
		case GET_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case GET_SUPERORDER_SUCCESS:
			return {...state, loading: false, superorder: action.payload.result.superOrder,
				id: action.payload.result.id};
		case POST_ORDER_BEGIN:
			return { ...state, loading: true };
		case POST_ORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case POST_ORDER_SUCCESS:
			const myOrderKey = "myOrder";
			const superorder3 = state.superorder;
			superorder3[myOrderKey] = action.payload.order;
			return { ...state, loading: false, id: action.payload.id, superorder: superorder3};

		case DELETE_ORDER_BEGIN:
			return { ...state, loading: true };
		case DELETE_ORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case DELETE_ORDER_SUCCESS:
			const myOrderKey2 = "myOrder";
			const superorder = state.superorder;
			delete superorder[myOrderKey2];
			return { ...state, loading: false, id: action.payload.id, superorder};

		case EDIT_ORDER_STATUS_BEGIN:
			return { ...state, loading: true };
		case EDIT_ORDER_STATUS_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case EDIT_ORDER_STATUS_SUCCESS:

			const superorder2 = state.superorder;
			const key2 = "orders";

			superorder2[key2] = superorder2[key2].map((order) => {
				if(order.id === action.payload.id) {
					order.status = action.payload.status;
				}
				return order;
			});

			return { ...state, loading: false, id: action.payload.id, superorder: superorder2};
		case DELETE_SUPERORDER_BEGIN:
			return { ...state, loading: true };
		case DELETE_SUPERORDER_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case DELETE_SUPERORDER_SUCCESS:
			return { ...state, loading: false, id: action.payload.id, superorder: null, deleted: true};
		default:
			return state;
	}
}
