import React from 'react';
import picture from '../../assets/img/Login_picture.png';
import userIco from '../../assets/img/UserLogin.png';
import lockIco from '../../assets/img/LockLogin.png';
import style from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div className={style.row}>
                <img className={style.icon} src={userIco} alt=""/>
                <Field placeholder={'Your Email'} component={'input'} name={'email'}/>
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
        props.login(data)   
    }

    if (props.isLogin) {
        return <Redirect to={'/profile'} /> // TODO: render my profile
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

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
    }
} 

export default connect(mapStateToProps, { login })(Login);