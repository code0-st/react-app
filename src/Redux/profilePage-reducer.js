const CHANGE_NEW_POST_TITLE = 'CHANGE_NEW_POST_TITLE';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_NEW_POST = 'ADD_NEW_POST';

const initialState = {
    posts: {
        myPosts: [
            {
                id: 0,
                title: 'First post',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            },
            {
                id: 1,
                title: 'Second post',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            },
            {
                id: 2,
                title: 'Third post',
                text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
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
                    amount: 3,
                    title: 'followers',
                },
                {
                    id: 1,
                    href: '/followings',
                    amount: 5,
                    title: 'followings',
                },
                {
                    id: 2,
                    href: '/myposts',
                    amount: 3,
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
            state.posts.newPostTitle = action.text;
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.posts.newPostText = action.text;
            return state;
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                title: state.posts.newPostTitle,
                text: state.posts.newPostText,
            }
            state.posts.myPosts.push(newPost);
            state.posts.newPostTitle = '';
            state.posts.newPostText = '';

            state.me.main.mySocialLinks[2].amount = state.posts.myPosts.length;
            return state;
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

export default profilePageReducer;