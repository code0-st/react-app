import { headerAPI } from '../api/api';

const SET_AUTH_PROFILE_DATA = 'SET_AUTH_PROFILE_DATA';
const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

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
        };
        case TOGGLE_LOGIN: {
            return {
                ...state,
                isLogin: action.isLogin,
            }
            
        };
        
        default:
            return state;
    }
}

export const setAuthProfileData = (id, email, login) => {return {type: SET_AUTH_PROFILE_DATA, data: {id, email, login}}}
export const toggleIsLogin = (isLogin) => {return {type: TOGGLE_LOGIN, isLogin}}

export const loginUser = () => {
    return (dispatch) => {
        headerAPI.login()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthProfileData(id, email, login));
                dispatch(toggleIsLogin(true));
            }
        })
    }
}


export default authReducer;