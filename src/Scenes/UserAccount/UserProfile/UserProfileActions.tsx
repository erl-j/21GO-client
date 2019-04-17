// import { BASE_URL } from '../../../constants/index';

export const LOAD_USERNAME_SUCCESS = 'LOAD_USERNAME_success';
export const FETCH_ACCOUNT_BEGIN = 'SEARCH_SUPERORDERS_BEGIN';
export const FETCH_ACCOUNT_FAILURE = 'SEARCH_SUPERORDERS_FAILURE';
export const FETCH_ACCOUNT_SUCCESS = 'SEARCH_SUPERORDERS_SUCCESS';

const loadUsernameSuccess = (username: string) => ({
	type: LOAD_USERNAME_SUCCESS,
	payload: { username },
});

// const fetchAccountBegin=()=>{

// }

// const fetchAccountFailure=()=>{

// }

// const fetchAccountSuccess=()=>{

// }

export const loadUsername = () => {
	return dispatch => {
		const user = localStorage.getItem('user');
		if (user) {
			const username = JSON.parse(user).username  ;
			if (username) {
				dispatch(loadUsernameSuccess(username));
			}
		}
	};
};
