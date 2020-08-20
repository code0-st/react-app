import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
    const myPostsElements = props.myPosts.
        map(post => <Post title={post.title} text={post.text} />)
    return (
        <div className={style.myPosts}>
            {myPostsElements}
        </div>
    );
}

export default MyPosts;