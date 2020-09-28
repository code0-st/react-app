import { stopSubmit } from 'redux-form';
import {loginAPI, securityAPI} from '../api/api';

const SET_AUTH_PROFILE_DATA = 'SET_AUTH_PROFILE_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

const initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false,
    captcha: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PROFILE_DATA: { return {...state, ...action.data}};
        case GET_CAPTCHA_URL: {return  {...state, captcha: action.payload}}

        default:
            return state;
    }
}

export const setAuthProfileData = (id, email, login, isLogin) => { return { type: SET_AUTH_PROFILE_DATA, data: { id, email, login, isLogin } } }
const getCaptcha = (payload) => {return {type: GET_CAPTCHA_URL, payload}}

export const loginUser = () => async dispatch => {
    let data = await loginAPI.me();

    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthProfileData(id, email, login, true));
    }
}

export const login = data => async dispatch => {
    let response = await loginAPI.login(data);
    if (response.data.resultCode === 0) {
        dispatch(loginUser())
    } else {
        if (response.data.resultCode === 10) {
            let captchaUrl = await  securityAPI.getCaptcha();
            dispatch(getCaptcha(captchaUrl.data.url))
        }
        dispatch(stopSubmit('login', { _error: response.data.messages.length > 0 ? response.data.messages[0] : 'Some error' }))
    }

}

export const logout = () => async dispatch => {
    let response = await loginAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthProfileData(null, null, null, false))
    }

}

export default authReducer;