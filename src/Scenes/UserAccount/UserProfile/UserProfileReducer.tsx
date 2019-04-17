import {LOAD_USERNAME_SUCCESS} from './UserProfileActions';

const initialState = {
	username:"none"
};

export default function UserProfileReducer(state = initialState, action: any) {
	switch (action.type) {
        case LOAD_USERNAME_SUCCESS:
            return {...state,username:action.payload.username};
		default:
			return state;
	}
}