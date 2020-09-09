import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { setProfile } from '../../Redux/profilePage-reducer';
import Preloader from '../Common/Preloader';

class ProfileContainer extends React.Component {
    componentDidMount = () => {
        const userId = this.props.match.params.userID;
        this.props.setProfile(userId);
    }

    render = () => {
        return (
            <> 
            {
            this.props.isFetching
                ? <Preloader />
                : <Profile {...this.props} profile={this.props.profile}/>
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
    }
}

const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(withRouterProfileContainer);