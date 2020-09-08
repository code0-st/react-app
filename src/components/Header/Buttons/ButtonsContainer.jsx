import React from 'react';
import Buttons from './Buttons';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setAuthProfileData, toggleIsLogin} from '../../../Redux/auth-reducer';

class ButtonsContainer extends React.Component {
    componentDidMount = () => {
        //this.props.toggleIsFetching(true); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                this.props.setAuthProfileData(id, email, login);
                this.props.toggleIsLogin(true);
            }
            //this.props.toggleIsFetching(false);
        })
    }

    render = () => {
        return (
            //this.props.isFetching ? <Preloader />
            <Buttons {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        isLogin: state.auth.isLogin,
        login: state.auth.login,
        //isFetching: state.auth.isFetching,
    }
}
export default connect(mapStateToProps, {setAuthProfileData, toggleIsLogin})(ButtonsContainer);