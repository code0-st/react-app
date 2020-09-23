import React, { useState, useEffect } from 'react';
import style from '../../Body.module.css';
import crossIco from '../../../../../../assets/img/cross.svg';

const Status = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => setStatus(props.status), [props.status]);

    let activateEditMode = () => {
        setEditMode(true)
    }
    let diactivateEditMode = () => {
        setEditMode(false)
    }
    let saveStatus = () => {
        props.updateStatus(status)
        setEditMode(false)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {   
                !editMode && <div className={style.status}
                                  onClick={activateEditMode}>{props.status}</div>
            }
            {
                editMode && <div className={style.status_inputArea}>
                    <input type="text"
                        value={status}
                        onChange={onStatusChange}
                        className={style.status_input}
                        autoFocus={true} />
                    <button className={style.saveBtn} onClick={saveStatus}>Сохранить</button>
                    <img src={crossIco} className={style.exit} onClick={diactivateEditMode} alt={'Close'}/>
                </div>
            }
        </div>
    )
}
export default Status;