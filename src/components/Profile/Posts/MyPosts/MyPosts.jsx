import React from 'react';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div className={style.myPosts}>
            {
                props.myPosts.map(post => <div className={style.post}>
                    <div className={style.postInfo}>
                        <div className={style.postSubject}>{post.subjectName}</div>
                        <div className={style.postPublTime}>{post.publicationTime}</div>
                    </div>
                    <div className={style.postTitle}>{post.title}</div>
                    <div className={style.postText}>{post.text}</div>
                    {
                        post.like.isLiked
                            ? <div className={style.postLikesCliked} onClick={() => props.dislikeClick(post.id)}>Like: {post.like.amount}</div>
                            : <div className={style.postLikes} onClick={() => props.likeClick(post.id)}>Like: {post.like.amount}</div>
                    }
                    {/* <button >like</button> */}
                </div>)
            }
        </div>
    );
}
export default MyPosts;