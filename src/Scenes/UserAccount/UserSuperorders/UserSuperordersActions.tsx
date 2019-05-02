import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const GET_USER_SUPERORDERS_BEGIN = 'GET_USER_SUPERORDERS_BEGIN';
export const GET_USER_SUPERORDERS_FAILURE = 'GET_USER_SUPERORDERS_FAILURE';
export const GET_USER_SUPERORDERS_SUCCESS = 'GET_USER_SUPERORDERS_SUCCESS';

export const DELETE_SUPERORDER_BEGIN_ACCOUNT = "DELETE_SUPERORDER_BEGIN_ACCOUNT";
export const DELETE_SUPERORDER_FAILURE_ACCOUNT = "DELETE_SUPERORDER_FAILURE_ACCOUNT";
export const DELETE_SUPERORDER_SUCCESS_ACCOUNT = "DELETE_SUPERORDER_SUCCESS_ACCOUNT";

export const EDIT_ORDER_STATUS_BEGIN_ACCOUNT = "EDIT_ORDER_STATUS_BEGIN_ACCOUNT";
export const EDIT_ORDER_STATUS_FAILURE_ACCOUNT = "EDIT_ORDER_STATUS_FAILURE_ACCOUNT";
export const EDIT_ORDER_STATUS_SUCCESS_ACCOUNT = "EDIT_ORDER_STATUS_SUCCESS_ACCOUNT";

export const getUserSuperordersBegin = () => ({
    type: GET_USER_SUPERORDERS_BEGIN,
});

export const getUserSuperordersSuccess = (results:object[]) => ({
    type: GET_USER_SUPERORDERS_SUCCESS,
    payload: { results },
});

export const getUserSuperordersFailure = (error: string) => ({
    type: GET_USER_SUPERORDERS_FAILURE,
    payload: { error },
});

export function getUserSuperorders() {

    const jwt = loadJwt();

    return (dispatch: any) => {
        dispatch(getUserSuperordersBegin());
        return APICall(Method.GET, '/superOrder/mine', null, jwt)
            .then(obj => {
                dispatch(getUserSuperordersSuccess(obj.superOrders));
                return obj;
            })
            .catch(error => dispatch(getUserSuperordersFailure(error)));
    };
}

export const deleteSuperorderBeginAccount = () => ({
    type: DELETE_SUPERORDER_BEGIN_ACCOUNT,
});

export const deleteSuperorderSuccessAccount = id => ({
    type: DELETE_SUPERORDER_SUCCESS_ACCOUNT,
    payload: { id },
});

export const deleteSuperorderFailureAccount = error => ({
    type: DELETE_SUPERORDER_FAILURE_ACCOUNT,
    payload: { error },
});

export function deleteSuperorder(id) {
    return (dispatch: any) => {
        dispatch(deleteSuperorderBeginAccount());
        return APICall(Method.DELETE, `/superorder/${id}`, null, loadJwt())
            .then(json => {
                dispatch(deleteSuperorderSuccessAccount(id));
                return json;
            })
            .catch(error => dispatch(deleteSuperorderFailureAccount(error)));
    };
}


export const editOrderStatusBeginAccount = () => ({
    type: EDIT_ORDER_STATUS_BEGIN_ACCOUNT,
});

export const editOrderStatusSuccessAccount = (id, status) => ({
    type: EDIT_ORDER_STATUS_SUCCESS_ACCOUNT,
    payload: { id, status },
});

export const editOrderStatusFailureAccount = (error: any) => ({
    type: EDIT_ORDER_STATUS_FAILURE_ACCOUNT,
    payload: { error },
});

export function editOrderStatus(id, status) {
    return (dispatch: any) => {
        dispatch(editOrderStatusBeginAccount());

        return APICall(Method.PUT, `/order/status`, {orderId: id, status}, loadJwt())
            .then(json => {
                dispatch(editOrderStatusSuccessAccount(id, status));
                return json;
            })
            .catch(error => dispatch(editOrderStatusFailureAccount(error)));
    };
}

