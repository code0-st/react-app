import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Profile from './Profile';
import {setProfile, setStatus, updateStatus} from '../../Redux/profilePage-reducer';
import Preloader from '../Common/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

const ProfileContainerHook = props => {
    let [userId, setUserId] = useState(props.match.params.userID);
    useEffect(() => {
        props.setProfile(userId);
        props.setStatus(userId);
        if (props.match.params.userID !== props.id) {
            setUserId(props.id);
        }
    }, [userId]);
    // componentDidMount = () => {
    //     let userId = this.props.match.params.userID;
    //     if (!userId) userId = this.props.id;
    //
    //     this.props.setProfile(userId);
    //     this.props.setStatus(userId);
    //
    //
    // }

    console.log("Render")
    return (
        <>
            {
                props.isFetching
                    ? <Preloader/>
                    : <Profile {...props} profile={props.profile} status={props.status}
                               updateStatus={props.updateStatus}/>
            }
        </>
    );
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
    connect(mapStateToProps, {setProfile, setStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainerHook)