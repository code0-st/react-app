import React, {Fragment, useEffect, useState} from 'react';
import Avatar from './Avatar/Avatar';
import Body from './Body/Body';

import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    const [mainPhoto, setMainPhoto] = useState(null);
    let onChoosePhoto = (event) => {
        if (event.target.files.length !== 0) {
            setMainPhoto(event.target.files[0]);
        }
    }
    const onSavePhoto = () => {
        props.savePhoto(mainPhoto);
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.myPhotoInfo}>
                <Avatar photo={props.profile.photos.large}/>
                {
                    props.isOwner && <Fragment>
                        <input type={'file'}
                               className={style.choosePhoto}
                               onChange={onChoosePhoto}/>
                        <button className={style.sendPhoto}
                                onClick={onSavePhoto}
                                disabled={mainPhoto === null}>Отправить
                        </button>
                    </Fragment>
                }
            </div>
            <Body social={props.mySocialLinks}
                  profile={props.profile}
                  status={props.status}
                  updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;