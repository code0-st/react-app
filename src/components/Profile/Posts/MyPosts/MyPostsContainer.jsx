import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { likeClickActionCreator, setDataActionCreator, dislikeClickActionCreator } from '../../../../Redux/profilePage-reducer';

let mapStateToProps = (state) => {
    return {
        myPosts: state.profilePage.myPosts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        likeClick: (id) => {
            dispatch(likeClickActionCreator(id));
        },
        dislikeClick: (id) => {
            dispatch(dislikeClickActionCreator(id));
        },
        setData: (data) => {
            dispatch(setDataActionCreator(data));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;