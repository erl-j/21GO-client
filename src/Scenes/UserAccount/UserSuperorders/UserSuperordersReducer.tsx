import { GET_USER_SUPERORDERS_BEGIN, GET_USER_SUPERORDERS_SUCCESS, GET_USER_SUPERORDERS_FAILURE } from './UserSuperordersActions';

const initialState = {
    results: [],
    loading: false,
    error: null,
};

export default function userSuperordersReducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_USER_SUPERORDERS_BEGIN:
            return {...state, error: null, loading: true, results:[]};
        case GET_USER_SUPERORDERS_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        case GET_USER_SUPERORDERS_SUCCESS:
            return {...state, loading: false, results: action.payload.results, error: null};
        default:
            return state;
    }
}
