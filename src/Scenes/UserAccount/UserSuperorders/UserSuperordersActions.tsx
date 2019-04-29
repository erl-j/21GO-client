import {APICall, Method} from "../../../apiCall";
import loadJwt from "../../../helpers/loadJwt";

export const GET_USER_SUPERORDERS_BEGIN = 'GET_USER_SUPERORDERS_BEGIN';
export const GET_USER_SUPERORDERS_FAILURE = 'GET_USER_SUPERORDERS_FAILURE';
export const GET_USER_SUPERORDERS_SUCCESS = 'GET_USER_SUPERORDERS_SUCCESS';

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


