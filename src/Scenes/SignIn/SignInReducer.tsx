import {
    SIGN_IN_BEGIN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE
  } from './SignInActions';

const initialState={
    jwt:"",
    loading:false,
    error:null
}
export default function signInReducer(state=initialState,action:any){
    switch (action.type) {
		case SIGN_IN_BEGIN:
            return { ...state, error:null, loading:true };
        case SIGN_IN_FAILURE:
            return { ...state, loading:false,error:action.payload.error};
        case SIGN_IN_SUCCESS:
            return { ...state, loading:false,signedIn: true,jwt: action.payload.jwt };
        default:
            return state;     
	}
}
