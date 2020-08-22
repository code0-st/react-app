const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_DATA = 'SET_DATA';

const initialState = {
    users: [
        {
            id: 0,
            photoUrl: '',
            userName: 'Абрахам Тугалов',
            userActivity: 'Программист, ютубер',
            totalPosts: 10,
            isFollowed: true,
        },
        {
            id: 1,
            photoUrl: '',
            userName: 'Владилен Минин',
            userActivity: 'Front-end developer',
            totalPosts: 5,
            isFollowed: false,
        },
        {
            id: 2,
            photoUrl: '',
            userName: 'Дмитрий Кузюбердин',
            userActivity: 'Fullstack developer',
            totalPosts: 12,
            isFollowed: false,
        },
        {
            id: 3,
            photoUrl: '',
            userName: 'Кирилл Эдуардович',
            userActivity: 'Front-end beginner',
            totalPosts: 3,
            isFollowed: false,
        }
    ],
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
        
        case SET_DATA:
            return {
                ...state,
                users: [...state.users, ...action.data],
            };

        default:
            return state;
    }
}

export const followAC = (id) => {return {type: FOLLOW, id}} 
export const unfollowAC = (id) =>{return {type: UNFOLLOW, id}}
export const setDataAC = (data) => {return {type: SET_DATA, data}}

export default authorsPageReducer;