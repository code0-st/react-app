import React from 'react';
import style from './Authors.module.css';
import userPhoto from '../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

const Authors = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.usersForPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.authorsPage}>
            <ul>            
            {    
                pages.map(element => <span className={props.currentPage === element ? style.clicked : style.default}
                    onClick={() => props.onChangeCurrentPage(element)}>{element}</span>)
            }   
            </ul>
            {        
            props.users.map(user => <div className={style.user}>
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