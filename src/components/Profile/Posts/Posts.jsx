import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import NewPost from './NewPost/NewPost';

import style from './Posts.module.css';

const Posts = () => {
    return (
        <div className={style.posts}>
            <MyPosts />
            <NewPost />
        </div>
    )
}

export default Posts;