import React from 'react';
import picture from '../../assets/img/Login_picture.png';
import userIco from '../../assets/img/UserLogin.png';
import lockIco from '../../assets/img/LockLogin.png';
import style from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { loginAPI, profileAPI } from '../../api/api';

const LoginForm = (props) => {
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.row}>
                <img className={style.icon} src={userIco} alt=""/>
                <Field placeholder={'Your Email'} component={'input'} name={'login'}/>
            </div>
            <div className={style.row}>
                <img className={style.icon} src={lockIco} />
                <Field placeholder={'Password'} type={'password'} component={'input'} name={'password'}/>
            </div>
            <div className={style.remember}>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember me
            </div>
            <div>
                <button className={style.loginBtn}>Log in</button>
            </div>
            
        </form>
    );
}
const LoginReduxForm = reduxForm( { form: 'login' } )(LoginForm)
const Login = (props) => {
    const onSubmit = (data) => {
        loginAPI.updateLogin(data)
        .then(data => {
            // profileAPI.setProfile(data.id)
            console.log(data);
        })
    }
    return (
        <div className={style.loginPage}>
            <img src={picture} className={style.picture}></img>
            <div className={style.loginForm_area}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={style.signup}>
                <a className={style.signupLink} href="#">Create an account</a>
            </div>
        </div>
    );
}


export default Login;