import React from 'react';
import style from './../MyPosts.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.postTitle}>{props.title}</div>
            <div className={style.postText}>{props.text}</div>
        </div>
    );
}

export default Post;