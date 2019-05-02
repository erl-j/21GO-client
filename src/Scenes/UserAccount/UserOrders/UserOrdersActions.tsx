import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const GET_USER_ORDERS_BEGIN = 'GET_USER_ORDERS_BEGIN';
export const GET_USER_ORDERS_FAILURE = 'GET_USER_ORDERS_FAILURE';
export const GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';

export const DELETE_ORDER_BEGIN_ACCOUNT = 'DELETE_ORDER_BEGIN_ACCOUNT';
export const DELETE_ORDER_FAILURE_ACCOUNT = 'DELETE_ORDER_FAILURE_ACCOUNT';
export const DELETE_ORDER_SUCCESS_ACCOUNT = 'DELETE_ORDER_SUCCESS_ACCOUNT';

export const getUserOrdersBegin = () => ({
    type: GET_USER_ORDERS_BEGIN,
});

export const getUserOrdersSuccess = (results:object[]) => ({
    type: GET_USER_ORDERS_SUCCESS,
    payload: { results },
});

export const getUserOrdersFailure = (error: string) => ({
    type: GET_USER_ORDERS_FAILURE,
    payload: { error },
});

export function getUserOrders() {

    const jwt = loadJwt();

    return (dispatch: any) => {
        dispatch(getUserOrdersBegin());
        return APICall(Method.GET, '/superOrder/joined', null, jwt)
            .then(obj => {
                dispatch(getUserOrdersSuccess(obj.superOrders));
                return obj;
            })
            .catch(error => dispatch(getUserOrdersFailure(error)));
    };
}



export const deleteOrderBeginAccount = () => ({
    type: DELETE_ORDER_BEGIN_ACCOUNT,
});

export const deleteOrderSuccessAccount = id => ({
    type: DELETE_ORDER_SUCCESS_ACCOUNT,
    payload: { id },
});

export const deleteOrderFailureAccount = error => ({
    type: DELETE_ORDER_FAILURE_ACCOUNT,
    payload: { error },
});

export function deleteOrder(id) {
    return (dispatch: any) => {
        dispatch(deleteOrderBeginAccount());
        return APICall(Method.DELETE, `/order/${id}`, null, loadJwt())
            .then(json => {
                dispatch(deleteOrderSuccessAccount(id));
                return json;
            })
            .catch(error => dispatch(deleteOrderFailureAccount(error)));
    };
}
