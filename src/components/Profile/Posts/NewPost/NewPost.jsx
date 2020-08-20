import React from 'react';
import style from './NewPost.module.css';
import { changeNewPostTitleActionCreator, changeNewPostTextActionCreator, addNewPostActionCreator } from './../../../../Redux/profilePage-reducer';

const NewPost = (props) => {
    const titleRef = React.createRef();
    const textRef = React.createRef();
    const changeNewPostTitle = () => {
        //console.log(titleRef.current.value);
        props.dispatch(changeNewPostTitleActionCreator(titleRef.current.value));
    }
    const changeNewPostText = () => {
        props.dispatch(changeNewPostTextActionCreator(textRef.current.value));
    }
    const addNewPost = () => props.dispatch(addNewPostActionCreator());

    return (
        <div className={style.newpost}>
            <form>
                <input ref={titleRef} className={style.title} placeholder="Заголовок" value={props.newPostTitle} onChange={changeNewPostTitle} />
                <textarea ref={textRef} className={style.body} placeholder="Текст поста" value={props.newPostText} onChange={changeNewPostText}></textarea>
            </form>
            <button className={style.btn} onClick={addNewPost}>Опубликовать</button>
        </div>
    )
}

export default NewPost;