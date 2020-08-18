import React from 'react';
import style from './../MyPosts.module.css';

const Post = () => {
    return (
        <div className={style.post}>
            <div className={style.postTitle}>New title</div>
            <div className={style.postText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ratione quis sed labore excepturi adipisci aperiam facilis harum quibusdam veritatis.</div>
        </div>
    );
}

export default Post;