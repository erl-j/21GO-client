import {
    GET_USER_SUPERORDERS_BEGIN,
    GET_USER_SUPERORDERS_SUCCESS,
    GET_USER_SUPERORDERS_FAILURE,
    DELETE_SUPERORDER_BEGIN_ACCOUNT,
    DELETE_SUPERORDER_FAILURE_ACCOUNT,
    DELETE_SUPERORDER_SUCCESS_ACCOUNT,
    EDIT_ORDER_STATUS_BEGIN_ACCOUNT,
    EDIT_ORDER_STATUS_FAILURE_ACCOUNT,
    EDIT_ORDER_STATUS_SUCCESS_ACCOUNT } from './UserSuperordersActions';

const initialState = {
    userSuperorders: [],
    loading: false,
    error: null,
};

export default function userSuperordersReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_USER_SUPERORDERS_BEGIN:
            return {...state, error: null, loading: true, results:[]};
        case GET_USER_SUPERORDERS_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        case GET_USER_SUPERORDERS_SUCCESS:
            return {...state, loading: false, userSuperorders: action.payload.results, error: null};
        case EDIT_ORDER_STATUS_BEGIN_ACCOUNT:
            return { ...state, loading: true };
        case EDIT_ORDER_STATUS_FAILURE_ACCOUNT:
            return { ...state, loading: false, error: action.payload.error};
        case EDIT_ORDER_STATUS_SUCCESS_ACCOUNT:

           let superorders: any[] = state.userSuperorders;

           superorders = superorders.map((superorder: {orders: any} ) => {

               superorder.orders! = superorder.orders!.map((order) => {
                   if(order.id === action.payload.id) {
                       order.status = action.payload.status;
                   }
                   return order;
               });

               return superorder;
           });

            return { ...state, loading: false, id: action.payload.id, userSuperorders: superorders};
        case DELETE_SUPERORDER_BEGIN_ACCOUNT:
            return { ...state, loading: true };
        case DELETE_SUPERORDER_FAILURE_ACCOUNT:
            return { ...state, loading: false, error: action.payload.error};
        case DELETE_SUPERORDER_SUCCESS_ACCOUNT:

            const superorders2: any[] = state.userSuperorders.filter((superorder: {id: any} ) => {
                return superorder.id !== action.payload.id;
            });

            return { ...state, loading: false, id: action.payload.id, userSuperorders: superorders2};
        default:
            return state;
    }
}
