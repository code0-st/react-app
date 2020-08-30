const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_DATA = 'SET_DATA';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_CURRENT_PAGE = 'TOGGLE_CURRENT_PAGE';

const initialState = {
    users: [],
    totalCount: 300,
    currentPage: 1,
    usersForPage: 15,
};

const authorsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        console.log(user.isFollowed);
                        return {
                            ...user,
                            isFollowed: true,
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
                            isFollowed: false,
                        }
                    }
                    return user;
                }),
            };
        
        case SET_DATA: { return {...state, users: [...action.data]}}
        case SET_TOTAL_COUNT: { return {...state, totalCount: action.totalCount}}
        case TOGGLE_CURRENT_PAGE: { return {...state, currentPage: action.currentPage}}

        default:
            return state;
    }
}

export const followAC = (id) => {return {type: FOLLOW, id}} 
export const unfollowAC = (id) =>{return {type: UNFOLLOW, id}}
export const setDataAC = (data) => {return {type: SET_DATA, data}}
export const setTotalCountAC = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}}
export const toggleCurrentPageAC = (currentPage) => {return {type: TOGGLE_CURRENT_PAGE, currentPage}}

export default authorsPageReducer;