import React from 'react';
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfileAC } from '../../Redux/profilePage-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        const userId = this.props.match.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
            then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render = () => {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        main: state.profilePage.main,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);