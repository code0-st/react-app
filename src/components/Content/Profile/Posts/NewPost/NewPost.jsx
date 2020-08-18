import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {
    return (
        <div className={style.newpost}>
            <form>
                <input className={style.title} type="text" placeholder="Заголовок" />
                <textarea className={style.body} placeholder="Текст поста" ></textarea>
            </form>
            <button className={style.btn}>Опубликовать</button>
        </div>
    )
}

export default NewPost;