import React from 'react';
import style from './NewPost.module.css';
import { changeNewPostTitleActionCreator, changeNewPostTextActionCreator, addNewPostActionCreator } from './../../../../Redux/profilePage-reducer';

const NewPost = (props) => {
    const titleRef = React.createRef();
    const textRef = React.createRef();

    const onTitleChange = () => {
        props.changeNewPostTitle(titleRef.current.value);
    }
    const onTextChange = () => {
        props.changeNewPostText(textRef.current.value);
    }

    const onAddPost = () => {
        props.addNewPost()
    }

    return (
        <div className={style.newpost}>
            <form>
                <input ref={titleRef} className={style.title} placeholder="Заголовок" value={props.newPostTitle} onChange={onTitleChange} />
                <textarea ref={textRef} className={style.body} placeholder="Текст поста" value={props.newPostText} onChange={onTextChange}></textarea>
            </form>
            <button className={style.btn} onClick={onAddPost}>Опубликовать</button>
        </div >
    )
}

export default NewPost;