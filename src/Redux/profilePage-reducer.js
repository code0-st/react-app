import { profileAPI } from '../api/api';

const ADD_NEW_POST = 'ADD_NEW_POST';
const LIKE_CLICK = 'LIKE_CLICK';
const DISLIKE_CLICK = 'DISLIKE_CLICK';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_PROFILE_FETCHING = 'TOGGLE_PROFILE_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO ='SAVE_PHOTO';

const initialState = {

    id: 0,

    myPosts: [
        {
            id: 0,
            title: 'First post',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            publicationTime: '13 августа 2020, 15:34',
            subjectName: 'Программирование',
            like: {
                amount: 13,
                isLiked: true
            },
        },
        {
            id: 1,
            title: 'Second post',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            publicationTime: '16 августа 2020, 20:04',
            subjectName: 'Программирование',
            like: {
                amount: 4,
                isLiked: false
            },
        },
        {
            id: 2,
            title: 'Third post',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            publicationTime: '20 августа 2020, 1:34',
            subjectName: 'Программирование',
            like: {
                amount: 2,
                isLiked: false
            },
        },
    ],

    mySocialLinks: [
        {
            id: 0,
            href: '/followers',
            amount: 0,
            title: 'followers',
        },
        {
            id: 1,
            href: '/followings',
            amount: 0,
            title: 'followings',
        },
        {
            id: 2,
            href: '/myposts',
            amount: 0,
            title: 'posts',
        }
    ],

    profile: null,
    profileIsFetching: false,
    status: '',
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NEW_POST:
            let now = new Date();
            let today = `${now.getDate()} ${now.toLocaleString('ru', { month: 'long' })} ${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
            let newPost = {
                id: state.myPosts.length,
                title: action.newPostTitle,
                text: action.newPostText,
                like: {
                    amount: 0,
                    isLiked: false,
                },
                subjectName: 'Программирование',
                publicationTime: String(today),
            }
            state.mySocialLinks[2].amount = state.myPosts.length + 1;
            return {
                ...state,
                myPosts: [...state.myPosts, newPost],
            };

        case LIKE_CLICK:
            let stateCopy = { ...state };
            stateCopy.myPosts = state.myPosts.map(post => {
                if (post.id === action.id && post.like.isLiked === false) {
                    return {
                        ...post,
                        like: {
                            ...post.like,
                            amount: post.like.amount + 1,
                            isLiked: true,
                        }
                    }
                }
                return post;
            });
            return stateCopy;

        case DISLIKE_CLICK: {
            let stateCopy = { ...state };
            stateCopy.myPosts = state.myPosts.map(post => {
                if (post.id === action.id && post.like.isLiked === true) {
                    return {
                        ...post,
                        like: {
                            ...post.like,
                            amount: post.like.amount - 1,
                            isLiked: false,
                        }
                    }
                }
                return post;
            });
            return stateCopy;
        }

        case SET_USER_PROFILE: { return { ...state, profile: action.profile } }

        case TOGGLE_PROFILE_FETCHING: { return { ...state, profileIsFetching: action.isFetching } }

        case SET_USER_STATUS: { return { ...state, status: action.status } }

        case SAVE_PHOTO: {return {...state, profile: {...state.profile, photos: action.payload}}}

        default:
            return state;
    };
};

export const addNewPost = (newPostTitle, newPostText) => { return { type: ADD_NEW_POST, newPostTitle, newPostText } };

export const likeClick = id => { return { type: LIKE_CLICK, id}};

export const dislikeClick = id => { return { type: DISLIKE_CLICK, id}};

export const setUserProfileAC = (profile) => {return {type: SET_USER_PROFILE, profile}};

const toggleProfileFetching = (isFetching) => {return {type: TOGGLE_PROFILE_FETCHING, isFetching}};
const setUserStatus = (status) => {return {type: SET_USER_STATUS, status}};
const savePhotoSuccess = (payload) => {return {type: SAVE_PHOTO, payload}};

export const setProfile = userId => async dispatch => {
    dispatch(toggleProfileFetching(true))
    let data = await profileAPI.setProfile(userId);
    dispatch(setUserProfileAC(data));
    dispatch(toggleProfileFetching(false));

}

export const setStatus = userId => async dispatch => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response.data))
}

export const updateStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (payload) => async dispatch => {
    let response = await profileAPI.savePhoto(payload);
    debugger
    dispatch(savePhotoSuccess(response.data.data.photos));
}

export default profilePageReducer;