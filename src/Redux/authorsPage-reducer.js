import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_DATA = 'SET_DATA';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_DISABLE_BUTTONS ='TOGGLE_DISABLE_BUTTONS';

const initialState = {
    users: [],
    totalCount: 300,
    currentPage: 1,
    usersForPage: 15,
    isFetching: false,
    disabled: [],
};

const authorsPageReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    return user;
                }),
            };

        case UNFOLLOW: 
        return {
            ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: false,
                        }
                    }
                    return user;
                }),
        };
        
        case SET_DATA: { return {...state, users: [...action.data]}}
        case SET_TOTAL_COUNT: { return {...state, totalCount: action.totalCount}}
        case SET_CURRENT_PAGE: { return {...state, currentPage: action.currentPage}}
        case TOGGLE_IS_FETCHING: { return {...state, isFetching: action.isFetching}}
        case TOGGLE_DISABLE_BUTTONS:
        return {
            ...state,
            disabled: action.isFetching ?
                [...state.disabled, action.userId]
                : state.disabled.filter(id => id !== action.userId)
        };      
        
        default:
            return state;
    }
}

export const followAC = (id) => {return {type: FOLLOW, id}} 
export const unfollowAC = (id) =>{return {type: UNFOLLOW, id}}
export const setDataAC = (data) => {return {type: SET_DATA, data}}
export const setTotalCountAC = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}}
export const setCurrentPageAC = (currentPage) => {return {type: SET_CURRENT_PAGE, currentPage}}
export const toggleIsFetchingAC = (isFetching) => {return {type: TOGGLE_IS_FETCHING, isFetching}}
export const toggleDisabledBtns = (isFetching, userId) => {return {type: TOGGLE_DISABLE_BUTTONS, isFetching, userId}}

export const getUsers = (usersForPage = 15, currentPage = 1) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true)); 
        dispatch(setCurrentPageAC(currentPage));
        usersAPI.getUsers(usersForPage, currentPage)
        .then(data => {
            dispatch(setDataAC(data.items));
            dispatch(toggleIsFetchingAC(false));
            // this.props.setTotalCountAC(data.totalCount)
        })  
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabledBtns(true, id));
        usersAPI.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(toggleDisabledBtns(false, id));
        })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabledBtns(true, id));
        usersAPI.unfollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(id))
            }
            dispatch(toggleDisabledBtns(false, id));
        })
    }
}

export default authorsPageReducer;