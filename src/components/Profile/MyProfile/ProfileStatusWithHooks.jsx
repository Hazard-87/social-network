import React, {useEffect, useState} from "react";
import styles from './MyProfile.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
            setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value
        )
    }

    return (
        <div className={styles.status}>
            {editMode
                ? <div><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
                : <div><span onClick={activateEditMode}>{props.status || '-----'}</span></div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;