import React from 'react';
import Buttons from './Buttons';
import { connect } from 'react-redux';
import { loginUser, logout } from '../../../Redux/auth-reducer';

class ButtonsContainer extends React.Component {
    componentDidMount = () => {
        this.props.loginUser();
    }

    render = () => {
        return (
            <Buttons login={this.props.login} isLogin={this.props.isLogin} logout={this.props.logout} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        isLogin: state.auth.isLogin,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, { loginUser, logout })(ButtonsContainer);