import React from 'react';

import style from './MyPosts.module.css';

const MyPosts = (props) => {
    const data = [
        {
            id: 0,
            title: 'First post',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            publicationTime: '13 августа 2020, 15:34',
            subjectName: 'Программирование',
            like: {
                amount: 13,
                isLiked: true
            },
        },
        {
            id: 1,
            title: 'Second post',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            publicationTime: '16 августа 2020, 20:04',
            subjectName: 'Программирование',
            like: {
                amount: 4,
                isLiked: false
            },
        },
        {
            id: 2,
            title: 'Third post',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit numquam itaque assumenda necessitatibus impedit.',
            publicationTime: '20 августа 2020, 1:34',
            subjectName: 'Программирование',
            like: {
                amount: 2,
                isLiked: false
            },
        },
    ];

    if (props.myPosts.length === 0) {
        props.setData(data);
    }

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