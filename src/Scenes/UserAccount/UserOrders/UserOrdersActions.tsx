import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const GET_USER_ORDERS_BEGIN = 'GET_USER_ORDERS_BEGIN';
export const GET_USER_ORDERS_FAILURE = 'GET_USER_ORDERS_FAILURE';
export const GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';

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
            .catch(error => dispatch(getUserOrdersFailure(error.message)));
    };
}


