import { GET_USER_ORDERS_BEGIN, GET_USER_ORDERS_SUCCESS, GET_USER_ORDERS_FAILURE } from './UserOrdersActions';

const initialState = {
    results: [],
    loading: false,
    error: null,
};

export default function userOrdersReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_USER_ORDERS_BEGIN:
            return {...state, error: null, loading: true, results:[]};
        case GET_USER_ORDERS_FAILURE:
            console.log(action.payload.error);
            return {...state, loading: false, error: action.payload.error};
        case GET_USER_ORDERS_SUCCESS:
            return {...state, loading: false, results: action.payload.results};
        default:
            return state;
    }
}
