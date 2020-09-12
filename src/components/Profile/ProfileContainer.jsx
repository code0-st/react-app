import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { setProfile, setStatus, updateStatus } from '../../Redux/profilePage-reducer';
import Preloader from '../Common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount = () => { 
        const userId = this.props.match.params.userID;
        this.props.setProfile(userId);
        this.props.setStatus(userId);
    }

    render = () => {
        return (
            <> 
            {
            this.props.isFetching
                ? <Preloader />
                : <Profile {...this.props} profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus} updateStatus={this.props.updateStatus}/>
            }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        main: state.profilePage.main,
        isFetching: state.profilePage.profileIsFetching,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, { setProfile, setStatus, updateStatus }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)