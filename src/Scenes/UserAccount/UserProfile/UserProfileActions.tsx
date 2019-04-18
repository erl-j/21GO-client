// import { BASE_URL } from '../../../constants/index';
import { APICall,Method } from 'src/apiCall';
import loadJwt from 'src/helpers/loadJwt';

export const LOAD_USERNAME_SUCCESS = 'LOAD_USERNAME_SUCESS';
export const FETCH_ACCOUNT_BEGIN = 'SEARCH_SUPERORDERS_BEGIN';
export const FETCH_ACCOUNT_FAILURE = 'SEARCH_SUPERORDERS_FAILURE';
export const FETCH_ACCOUNT_SUCCESS = 'SEARCH_SUPERORDERS_SUCCESS';

const loadUsernameSuccess = (username: string) => ({
	type: LOAD_USERNAME_SUCCESS,
	payload: { username },
});

const fetchAccountBegin=()=>({
	type: FETCH_ACCOUNT_BEGIN
})

const fetchAccountFailure=(err)=>({
	type: FETCH_ACCOUNT_FAILURE
})

const fetchAccountSuccess=(res)=>({
	type: FETCH_ACCOUNT_SUCCESS
}
)

export function fetchAccount(){
	return (dispatch: any) => {
		dispatch(fetchAccountBegin());
		return APICall(Method.POST,'/user/profile', null, loadJwt())
			.then((res) => {
				dispatch(fetchAccountSuccess(res));
				return;
			})
			.catch(error => dispatch(fetchAccountFailure(error)));
	};
}

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
