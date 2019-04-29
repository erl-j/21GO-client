import { SIGN_UP_BEGIN, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './SignUpActions';

const initialState = {
	loading: false,
    error: null,
    success: false
};

export default function signUpReducer(state = initialState, action: any) {
	switch (action.type) {
		case SIGN_UP_BEGIN:
			return { ...state, error: null, loading: true};
		case SIGN_UP_FAILURE:
			return { ...state, loading: false, error: action.payload.error};
		case SIGN_UP_SUCCESS:
			return { ...state, loading: false, success: true};
		default:
			return state;
	}
}
