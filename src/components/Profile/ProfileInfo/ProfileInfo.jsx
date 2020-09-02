import React from 'react';
import Avatar from './Avatar/Avatar';
import Body from './Body/Body';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo}>
            <Avatar photo={props.main.photo} />
            <Body main={props.main} />
        </div>
    )
}

export default ProfileInfo;