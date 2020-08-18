import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;