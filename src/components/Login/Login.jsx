import React from 'react';
import picture from '../../assets/img/Login_picture.png';
import userIco from '../../assets/img/UserLogin.png';
import lockIco from '../../assets/img/LockLogin.png';
import style from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../Redux/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {required} from '../../utils/validators/validate';
import {Input} from '../Common/FormsErrors';

const LoginForm = ({handleSubmit, error, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.loginForm}>
                <div className={style.row}>
                    <img className={style.icon} src={userIco} alt=""/>
                    <Field placeholder={'Your Email'} component={Input} name={'email'} validate={[required]}/>
                </div>
                <div className={style.row}>
                    <img className={style.icon} src={lockIco} alt=""/>
                    <Field placeholder={'Password'} type={'password'} component={Input} name={'password'}
                           validate={[required]}/>
                </div>
                <div className={style.remember}>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'}/>Remember me
                </div>
                {
                    error && <div className={style.formError}>{error}</div>
                }
                <div>
                    <button className={style.loginBtn}>Log in</button>
                </div>
            </div>
            {props.captcha && <div className={style.captcha}>
                <img src={props.captcha} alt=""/>
                <Field type={'text'} component={'input'} name={'captcha'} />
            </div>}
        </form>
    );
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isLogin, captcha, ...props}) => {
    const onSubmit = (data) => {
        login(data)
    }

    if (isLogin) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={style.loginPage}>
            <img src={picture} className={style.picture} alt={''}></img>
            <div className={style.loginForm_area}>
                <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
            </div>
            <div className={style.signup}>
                <a className={style.signupLink} href="/login">Create an account</a>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        captcha: state.auth.captcha,
    }
}

export default connect(mapStateToProps, {login})(Login);