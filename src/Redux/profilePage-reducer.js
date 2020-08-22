const CHANGE_NEW_POST_TITLE = 'CHANGE_NEW_POST_TITLE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';
const LIKE_CLICK = 'LIKE_CLICK';
const DISLIKE_CLICK = 'DISLIKE_CLICK';
const SET_DATA = 'SET_DATA';

const initialState = {
    posts: {
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
    },

    me: {
        main: {
            name: 'Кирилл Эдуардович',
            activity: 'Junior developer',
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
        },

        photo: 'https://sun2-3.userapi.com/c854016/v854016369/22a679/yTmYKW0ijp8.jpg',
    },
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEW_POST_TITLE:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    newPostTitle: action.text
                },
            };

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    newPostText: action.text
                },
            };

        case ADD_NEW_POST:
            let now = new Date();
            let today = `${now.getDate()} ${now.toLocaleString('ru', { month: 'long' })} ${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
            let newPost = {
                id: state.posts.myPosts.length,
                title: state.posts.newPostTitle,
                text: state.posts.newPostText,
                like: {
                    amount: 0,
                    isLiked: false,
                },
                subjectName: 'Программирование',
                publicationTime: String(today),
            }
            state.me.main.mySocialLinks[2].amount = state.posts.myPosts.length + 1;
            return {
                ...state,
                posts: {
                    ...state.posts,
                    myPosts: [...state.posts.myPosts, newPost],
                    newPostText: '',
                    newPostTitle: '',
                },
            };

        case LIKE_CLICK:
            {
                let stateCopy = { ...state };
                stateCopy.posts = { ...state.posts };
                stateCopy.posts.myPosts = state.posts.myPosts.map(post => {
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
            stateCopy.posts = { ...state.posts };
            stateCopy.posts.myPosts = state.posts.myPosts.map(post => {
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

        case SET_DATA:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    myPosts: [...state.posts.myPosts, ...action.data],
                }
            };

        default:
            return state;
    };
};

export const changeNewPostTitleActionCreator = (newLetter) => {
    return {
        type: CHANGE_NEW_POST_TITLE,
        text: newLetter,
    };
};

export const changeNewPostTextActionCreator = (newLetter) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        text: newLetter,
    };
};

export const addNewPostActionCreator = () => {
    return {
        type: ADD_NEW_POST,
    };
};

export const likeClickActionCreator = id => {
    return {
        type: LIKE_CLICK,
        id,
    }
}

export const dislikeClickActionCreator = id => {
    return {
        type: DISLIKE_CLICK,
        id,
    }
}

export const setDataActionCreator = (data) => {
    return {
        type: SET_DATA,
        data,
    }
}

export default profilePageReducer;