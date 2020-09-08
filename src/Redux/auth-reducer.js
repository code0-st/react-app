const SET_AUTH_PROFILE_DATA = 'SET_AUTH_PROFILE_DATA';
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
//const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isLogin: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_PROFILE_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        //case TOGGLE_IS_FETCHING: { return {...state, isFetching: action.isFetching}}
        //TODO: Complete toggle fetching function

        case TOGGLE_LOGIN: {
            return {
                ...state,
                isLogin: action.isLogin,
            }
            
        }
        default:
            return state;
    }
}

export const setAuthProfileData = (id, email, login) => {return {type: SET_AUTH_PROFILE_DATA, data: {id, email, login}}}
export const toggleIsLogin = (isLogin) => {return {type: TOGGLE_LOGIN, isLogin}}
//export const toggleIsFetching = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}}

export default authReducer;