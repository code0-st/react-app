import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import NewPostContainer from './NewPost/NewPostContainer';
import style from './Posts.module.css';

const Posts = () => {
    return (
        <div className={style.posts}>
            <MyPostsContainer />
            <NewPostContainer />
        </div>
    )
}

export default Posts;