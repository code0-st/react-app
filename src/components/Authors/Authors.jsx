import React from 'react';
import * as axios from 'axios';
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
            <NavLink to={`id/${user.id}`} className={style.photo}>
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
                    ? <button className={`${style.btn} ${style.unfollow}`} onClick={ () => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "f30cbbde-97db-45fa-a1d2-c9f6fd8b368e",
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(user.id)
                                }
                            })
                    }}>Отписаться</button>
                    : <button className={`${style.btn} ${style.follow}`} onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, 
                        {
                            withCredentials: true,
                            headers: {
                                "API-KEY": 'f30cbbde-97db-45fa-a1d2-c9f6fd8b368e',
                            }
                        })
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(user.id)
                            }
                        })
                    }}>Подписаться</button>
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