import loadJwt from '../../helpers/loadJwt';
import {APICall, Method} from "../../apiCall";

export const GET_SUPERORDER_BEGIN = 'GET_SUPERORDER_BEGIN';
export const GET_SUPERORDER_FAILURE = 'GET_SUPERORDER_FAILURE';
export const GET_SUPERORDER_SUCCESS = 'GET_SUPERORDER_SUCCESS';

export const POST_ORDER_BEGIN = 'POST_ORDER_BEGIN';
export const POST_ORDER_FAILURE = 'POST_ORDER_FAILURE';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';

export const EDIT_ORDER_STATUS_BEGIN = 'EDIT_ORDER_STATUS_BEGIN';
export const EDIT_ORDER_STATUS_FAILURE = 'EDIT_ORDER_STATUS_FAILURE';
export const EDIT_ORDER_STATUS_SUCCESS = 'EDIT_ORDER_STATUS_SUCCESS';

export const DELETE_ORDER_BEGIN = 'DELETE_ORDER_BEGIN';
export const DELETE_ORDER_FAILURE = 'DELETE_ORDER_FAILURE';
export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';

export const DELETE_SUPERORDER_BEGIN = 'DELETE_SUPERORDER_BEGIN';
export const DELETE_SUPERORDER_FAILURE = 'DELETE_SUPERORDER_FAILURE';
export const DELETE_SUPERORDER_SUCCESS = 'DELETE_SUPERORDER_SUCCESS';

export const getSuperorderBegin = () => ({
	type: GET_SUPERORDER_BEGIN
});

export const getSuperorderSuccess = result => ({
	type: GET_SUPERORDER_SUCCESS,
	payload: { result },
});

export const getSuperorderFailure = error => ({
	type: GET_SUPERORDER_FAILURE,
	payload: { error },
});

export function getSuperorder(id) {
	return (dispatch: any) => {
		dispatch(getSuperorderBegin());
		return APICall(Method.GET, '/superOrder/' + id, null, loadJwt())
			.then(obj => {
				dispatch(getSuperorderSuccess(obj));
				return obj;
			})
			.catch(error => dispatch(getSuperorderFailure(error)));
	};
}


export const postOrderBegin = () => ({
	type: POST_ORDER_BEGIN,
});

export const postOrderSuccess = order => ({
	type: POST_ORDER_SUCCESS,
	payload: { order },
});

export const postOrderFailure = error => ({
	type: POST_ORDER_FAILURE,
	payload: { error },
});

export function postOrder(attributes) {

	return (dispatch: any) => {
		dispatch(postOrderBegin());
		return APICall(Method.POST, '/order/',attributes,loadJwt())
		.then(json => {
			dispatch(postOrderSuccess(json.order));
			return json;
		})
		.catch(error => dispatch(postOrderFailure(error)));
	};
}


export const editOrderStatusBegin = () => ({
	type: EDIT_ORDER_STATUS_BEGIN,
});

export const editOrderStatusSuccess = (id, status) => ({
	type: EDIT_ORDER_STATUS_SUCCESS,
	payload: { id, status },
});

export const editOrderStatusFailure = (error: any) => ({
	type: EDIT_ORDER_STATUS_FAILURE,
	payload: { error },
});

export function editOrderStatus(id, status) {
	return (dispatch: any) => {
		dispatch(editOrderStatusBegin());

		return APICall(Method.PUT, `/order/status`, {orderId: id, status}, loadJwt())
			.then(json => {
				dispatch(editOrderStatusSuccess(id, status));
				return json;
			})
			.catch(error => dispatch(editOrderStatusFailure(error)));
	};
}


export const deleteOrderBegin = () => ({
	type: DELETE_ORDER_BEGIN,
});

export const deleteOrderSuccess = id => ({
	type: DELETE_ORDER_SUCCESS,
	payload: { id },
});

export const deleteOrderFailure = error => ({
	type: DELETE_ORDER_FAILURE,
	payload: { error },
});

export function deleteOrder(id) {
	return (dispatch: any) => {
		dispatch(deleteOrderBegin());
		return APICall(Method.DELETE, `/order/${id}`, null, loadJwt())
			.then(json => {
				dispatch(deleteOrderSuccess(id));
				return json;
			})
			.catch(error => dispatch(deleteOrderFailure(error)));
	};
}

export const deleteSuperorderBegin = () => ({
	type: DELETE_SUPERORDER_BEGIN,
});

export const deleteSuperorderSuccess = id => ({
	type: DELETE_SUPERORDER_SUCCESS,
	payload: { id },
});

export const deleteSuperorderFailure = error => ({
	type: DELETE_SUPERORDER_FAILURE,
	payload: { error },
});

export function deleteSuperorder(id) {
	return (dispatch: any) => {
		dispatch(deleteSuperorderBegin());
		return APICall(Method.DELETE, `/superorder/${id}`, null, loadJwt())
			.then(json => {
				dispatch(deleteSuperorderSuccess(id));
				return json;
			})
			.catch(error => dispatch(deleteSuperorderFailure(error)));
	};
}
