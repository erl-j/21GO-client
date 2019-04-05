// import { BASE_URL } from '../../../constants/index';

export const LOAD_USERNAME_SUCESS = 'LOAD_USERNAME_SUCESS';
export const FETCH_ACCOUNT_BEGIN = 'SEARCH_SUPERORDERS_BEGIN';
export const FETCH_ACCOUNT_FAILURE = 'SEARCH_SUPERORDERS_FAILURE';
export const FETCH_ACCOUNT_SUCCESS = 'SEARCH_SUPERORDERS_SUCCESS';

const loadUsernameSucess = (username: string) => ({
	type: LOAD_USERNAME_SUCESS,
	payload: { username },
});

// const fetchAccountBegin=()=>{

// }

// const fetchAccountFailure=()=>{

// }

// const fetchAccountSucess=()=>{

// }

export const loadUsername = () => {
	return dispatch => {
		const user = localStorage.getItem('user');
		if (user) {
			const username = JSON.parse(user).username  ;
			if (username) {
				dispatch(loadUsernameSucess(username));
			}
		}
	};
};
