import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import NewPost from './NewPost/NewPost';
import style from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={style.posts}>
            <MyPosts myPosts={props.posts.myPosts} />
            <NewPost newPostTitle={props.posts.newPostTitle} newPostText={props.posts.newPostText} dispatch={props.dispatch} />
        </div>
    )
}

export default Posts;