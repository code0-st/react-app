import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import {savePhoto, setProfile, setStatus, updateStatus} from '../../Redux/profilePage-reducer';
import Preloader from '../Common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.PureComponent {
    state = {
        isOwner: false,
    }
    refreshId() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.id;
            this.setState({isOwner: true});
        } else {
            this.setState(({isOwner: false}))
        }
        this.props.setProfile(userId);
        this.props.setStatus(userId);
    }
    componentDidMount = () => { 
        this.refreshId();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.refreshId();
        }
    }

    render = () => {
        return (
            <> 
            {
            this.props.isFetching
                ? <Preloader />
                : <Profile {...this.props}
                           profile={this.props.profile}
                           status={this.props.status}
                           updateStatus={this.props.updateStatus}
                           isOwner={this.state.isOwner}
                           savePhoto={this.props.savePhoto}/>
            }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        mySocialLinks: state.profilePage.mySocialLinks,
        isFetching: state.profilePage.profileIsFetching,
        status: state.profilePage.status,
        id: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, { setProfile, setStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)