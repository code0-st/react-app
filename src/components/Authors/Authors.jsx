import React from 'react';
import style from './Authors.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

class Authors extends React.Component {

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersForPage}&page=${this.props.currentPage}`)
        .then(response => {
            this.props.setData(response.data.items)
            //this.props.setTotalCount(response.data.totalCount)
        })
    }

    onToggleCurrentPage = (pageNumber) => {
        this.props.toggleCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersForPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setData(response.data.items)
            })
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.usersForPage);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={style.authorsPage}>
                <ul>            
                {    
                    pages.map(element => <span className={this.props.currentPage === element ? style.clicked : style.default}
                        onClick={() => this.onToggleCurrentPage(element)}>{element}</span>)
                }   
                </ul>
                {        
                this.props.users.map(user => <div className={style.user}>
                <div className={style.photo}>
                    <img src={user.photos.small === null ? userPhoto : user.photos.small} alt=""/>
                </div>
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
                        user.isFollowed
                        ? <button className={`${style.btn} ${style.unfollow}`} onClick={() => this.props.unfollow(user.id)}>Отписаться</button>
                        : <button className={`${style.btn} ${style.follow}`} onClick={() => this.props.follow(user.id)}>Подписаться</button>
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
}
   

export default Authors;