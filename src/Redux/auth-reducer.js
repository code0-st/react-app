import { stopSubmit } from 'redux-form';
import { loginAPI } from '../api/api';

const SET_AUTH_PROFILE_DATA = 'SET_AUTH_PROFILE_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PROFILE_DATA: { return {...state, ...action.data}};

        default:
            return state;
    }
}

export const setAuthProfileData = (id, email, login, isLogin) => { return { type: SET_AUTH_PROFILE_DATA, data: { id, email, login, isLogin } } }

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