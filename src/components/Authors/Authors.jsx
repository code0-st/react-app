import React from 'react';
import style from './Authors.module.css';

const Authors = (props) => {
    // if (props.users.length === 0) {
    //     props.setData([
    //     ])
    // }
    return (
        <div className={style.authorsPage}>{        
            props.users.map(user => <div className={style.user}>
            <div className={style.photo}>
                <img src={user.photoUrl} alt=""/>
            </div>
            <div className="info">
                <div className={style.name}>
                    {user.userName}
                </div>
                <div className={style.activity}>
                    {user.userActivity}
                </div>
            </div>
            <div className="actions">
                <div className={style.posts}>
                    Публикаций: {user.totalPosts}
                </div>
                {
                    user.isFollowed
                    ? <button className={`${style.btn} ${style.unfollow}`} onClick={() => props.unfollow(user.id)}>Отписаться</button>
                    : <button className={`${style.btn} ${style.follow}`} onClick={() => props.follow(user.id)}>Подписаться</button>
                }
                <div className={style.link}>
                    <a className={style.goto} href={`/authors/${user.id}`}>Перейти</a>
                </div>
            </div>
        </div>
        )}
        </div>
    );
}

export default Authors;