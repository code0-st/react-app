import { changeNewPostTitleActionCreator, changeNewPostTextActionCreator, addNewPostActionCreator } from "../../../../Redux/profilePage-reducer";
import NewPost from './NewPost';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostTitle: state.profilePage.posts.newPostTitle,
        newPostText: state.profilePage.posts.newPostText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewPostTitle: (title) => {
            dispatch(changeNewPostTitleActionCreator(title));
        },
        changeNewPostText: (text) => {
            dispatch(changeNewPostTextActionCreator(text))
        },
        addNewPost: () => dispatch(addNewPostActionCreator()),
    };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;