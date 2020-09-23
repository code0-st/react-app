import React from 'react';
import style from './Authors.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
import Paginator from "../Common/Paginator/Paginator";

const Authors = (props) => {
    return (
        <div className={style.authorsPage}>
        <Paginator totalCount={props.totalCount}
                   usersForPage={props.usersForPage}
                   currentPage={props.currentPage}
                   onChangeCurrentPage={props.onChangeCurrentPage} />
            {
            props.users.map(user => <div key={user.id} className={style.user}>
            <NavLink to={`profile/${user.id}`} className={style.photo}>
                <img src={user.photos.small === null ? userPhoto : user.photos.small} alt=""/>
            </NavLink>
            <div className="info">
                <div className={style.name}>
                    {user.name}
                </div>
                <div className={style.activity}>
                    'userActivity'
                </div>
            </div>
            <div className="actions">
                <div className={style.posts}>
                    Публикаций: 'int'
                </div>
                {
                    user.followed
                    ? <button className={`${style.btn} ${style.unfollow}`}
                        disabled={props.disabled.some(id => id === user.id)}
                        onClick={ () => props.unfollow(user.id)}>Отписаться</button>

                    : <button className={`${style.btn} ${style.follow}`}
                        disabled={props.disabled.some(id => id === user.id)}
                        onClick={ () => props.follow(user.id)}>Подписаться</button>
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