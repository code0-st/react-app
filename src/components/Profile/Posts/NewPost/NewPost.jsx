import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { addNewPost } from "../../../../Redux/profilePage-reducer";
// import { required, maxLength } from '../../../../utils/validators/validate';
import { required, maxLength30 } from '../../../../utils/validators/validate';

import style from './NewPost.module.css';

const NewPostForm = (props) => {
    // let maxLength30 = maxLength(30);
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostTitle' component={'input'} className={style.title} placeholder="Заголовок" validate={[required, maxLength30]} />
            <Field name='newPostText' component={'textarea'} className={style.body} placeholder="Текст поста" validate={[required]}/>   
            <button className={style.btn}>Опубликовать</button>
        </form>
    );
}

const NewPostReduxForm = reduxForm({ form: 'NewPost' })(NewPostForm);

const NewPost = (props) => {
    const onSubmit = (data) => {
        props.addNewPost(data.newPostTitle, data.newPostText)
    }

    return (
        <div className={style.newpost}>
            <NewPostReduxForm onSubmit={onSubmit}/>
        </div >
    )
}

export default connect(null, { addNewPost })(NewPost);