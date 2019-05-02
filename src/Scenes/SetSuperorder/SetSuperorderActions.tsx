import loadJwt from '../../helpers/loadJwt';
import {APICall, Method} from "../../apiCall";

export const POST_SUPERORDER_BEGIN = 'POST_SUPERORDER_BEGIN';
export const POST_SUPERORDER_FAILURE = 'POST_SUPERORDER_FAILURE';
export const POST_SUPERORDER_SUCCESS = 'POST_SUPERORDER_SUCCESS';

export const EDIT_SUPERORDER_IMAGE_BEGIN = 'EDIT_SUPERORDER_IMAGE_BEGIN';
export const EDIT_SUPERORDER_IMAGE_FAILURE = 'EDIT_SUPERORDER_IMAGE_FAILURE';
export const EDIT_SUPERORDER_IMAGE_SUCCESS = 'EDIT_SUPERORDER_IMAGE_SUCCESS';

export const editSuperorderImageBegin = () => ({
	type: EDIT_SUPERORDER_IMAGE_BEGIN,
});

export const editSuperorderImageSuccess = id => ({
	type: EDIT_SUPERORDER_IMAGE_SUCCESS,
	payload: { id },
});

export const editSuperorderImageFailure = (error: any) => ({
	type: EDIT_SUPERORDER_IMAGE_FAILURE,
	payload: { error },
});

export const postSuperorderBegin = () => ({
	type: POST_SUPERORDER_BEGIN,
});

export const postSuperorderSuccess = id => ({
	type: POST_SUPERORDER_SUCCESS,
	payload: { id },
});

export const postSuperorderFailure = (error: any) => ({
	type: POST_SUPERORDER_FAILURE,
	payload: { error },
});

export function postSuperorder(attributes, handler) {
	return (dispatch: any) => {
		dispatch(postSuperorderBegin());
		return APICall(Method.POST,  '/superOrder', attributes, loadJwt())
			.then(body => {

				console.log("successful post superOrder");
				console.log(body);

				return handler().then((url) => {

					if(url != null){

						dispatch(editSuperorderImageBegin());
						return APICall(Method.PUT, `/superOrder/${body.superOrder.id}/image`,
							{imageUrl: url}, loadJwt())
							.then(dispatch(editSuperorderImageSuccess(body.superOrder.id)))
							.catch(error => dispatch(editSuperorderImageFailure(error)));
					}
					else{
						dispatch(postSuperorderSuccess(body.superOrder.id));
						return body;
					}
				});

			})
			.catch(error => dispatch(postSuperorderFailure(error)));
	};
}

