import {LOAD_USERNAME_SUCESS} from './UserProfileActions';

const initialState = {
	username:"none"
};

export default function UserProfileReducer(state = initialState, action: any) {
	switch (action.type) {
        case LOAD_USERNAME_SUCESS:
            return {...state,username:action.payload.username}
		default:
			return state;
	}
}