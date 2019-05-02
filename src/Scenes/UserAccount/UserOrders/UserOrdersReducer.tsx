import {
    GET_USER_ORDERS_BEGIN,
    GET_USER_ORDERS_SUCCESS,
    GET_USER_ORDERS_FAILURE,
    DELETE_ORDER_SUCCESS_ACCOUNT,
    DELETE_ORDER_FAILURE_ACCOUNT,
    DELETE_ORDER_BEGIN_ACCOUNT
} from './UserOrdersActions';

const initialState = {
    userOrders: [],
    loading: false,
    error: null,
};

export default function userOrdersReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_USER_ORDERS_BEGIN:
            return {...state, error: null, loading: true, results:[]};
        case GET_USER_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        case GET_USER_ORDERS_SUCCESS:
            return {...state, loading: false, userOrders: action.payload.results};
        case DELETE_ORDER_BEGIN_ACCOUNT:
            return { ...state, loading: true };
        case DELETE_ORDER_FAILURE_ACCOUNT:
            return { ...state, loading: false, error: action.payload.error};
        case DELETE_ORDER_SUCCESS_ACCOUNT:

            const superorders: any[] = state.userOrders.filter((superorder: {myOrder: any} ) => {
                return superorder.myOrder.id !== action.payload.id;
            });

            return { ...state, loading: false, id: action.payload.id, userOrders: superorders};

        default:
            return state;
    }
}
