import { profileAPI } from '../api/api';

const CHANGE_NEW_POST_TITLE = 'CHANGE_NEW_POST_TITLE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';
const LIKE_CLICK = 'LIKE_CLICK';
const DISLIKE_CLICK = 'DISLIKE_CLICK';
const SET_PPROFILE_DATA = 'SET_PROFILE_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_PROFILE_FETCHING = 'TOGGLE_PROFILE_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';

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

    newPostTitle: '',
    newPostText: '',

    
    mySocialLinks: [
        {
            href: '/followers',
            amount: 0,
            title: 'followers',
        },
        {
            href: '/followings',
            amount: 0,
           title: 'followings',
        },
        {
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
        case CHANGE_NEW_POST_TITLE:
            return {
                ...state,
                newPostTitle: action.text
            };

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case ADD_NEW_POST:
            let now = new Date();
            let today = `${now.getDate()} ${now.toLocaleString('ru', { month: 'long' })} ${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
            let newPost = {
                id: state.myPosts.length,
                title: state.newPostTitle,
                text: state.newPostText,
                like: {
                    amount: 0,
                    isLiked: false,
                },
                subjectName: 'Программирование',
                publicationTime: String(today),
            }
            state.main.mySocialLinks[2].amount = state.myPosts.length + 1;
            return {
                ...state,
                    myPosts: [...state.myPosts, newPost],
                    newPostText: '',
                    newPostTitle: '',
            };

        case LIKE_CLICK:
            {
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
            }

        case DISLIKE_CLICK:
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

        case SET_PPROFILE_DATA:
            return {
                ...state,
                myPosts: [...state.posts.myPosts, ...action.data],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }

        case TOGGLE_PROFILE_FETCHING: {return {...state, profileIsFetching: action.isFetching}}

        case SET_USER_STATUS: {return {...state, status: action.status}}

        default:
            return state;
    };
};

export const changeNewPostTitleActionCreator = newLetter => {return {type: CHANGE_NEW_POST_TITLE, text: newLetter}};

export const changeNewPostTextActionCreator = (newLetter) => {return {type: CHANGE_NEW_POST_TEXT, text: newLetter}};

export const addNewPostActionCreator = () => {return {type: ADD_NEW_POST}};

export const likeClickActionCreator = id => {return {type: LIKE_CLICK, id}};

export const dislikeClickActionCreator = id => {return {type: DISLIKE_CLICK, id}};

export const setDataActionCreator = (data) => {return {type: SET_PPROFILE_DATA, data}};

export const setUserProfileAC = (profile) => {return {type: SET_USER_PROFILE, profile}};

const toggleProfileFetching = (isFetching) => { return {type: TOGGLE_PROFILE_FETCHING, isFetching}};
const setUserStatus = (status) => {return {type: SET_USER_STATUS, status}};

export const setProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleProfileFetching(true))
        profileAPI.setProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data));
            dispatch(toggleProfileFetching(false));
        });
    }
}

export const setStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateStatus = (status) => dispatch => {
    profileAPI.updateStatus(status)
    .then(response => {
        if (response.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export default profilePageReducer;