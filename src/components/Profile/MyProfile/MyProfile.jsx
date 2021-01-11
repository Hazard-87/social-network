import React from 'react';
import classes from './MyProfile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from "./ProfileDataForm";
import {setEditMode} from "../../../redux/profileReducer";

const MyProfile = (props) => {


    if (!props.profile.photos) {
        return <Preloader/>
    }

    const onSelectedPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            props.setEditMode(false)
        })
    }

    const onEditMode = () => {
    props.setEditMode(true)
    }

    return (
        <div className={classes.content}>
            <div className={classes.avatar}>
                <img src={!props.profile.photos.large ? userPhoto : props.profile.photos.large}/>
                {props.isOwner &&
                <div className={classes.root}>
                    <input accept="image/*" className={classes.input}
                           type="file" onChange={onSelectedPhoto}/>
                </div>}
            </div>
            <div>
                {props.isOwner && <div><button onClick={onEditMode}>edit profile</button></div>}
                <div><b>{props.profile.fullName}</b></div>
                <ProfileStatusWithHooks {...props} status={props.status} updateStatus={props.updateStatus}/>
                {props.editMode
                    ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} {...props}/>
                    : <ProfileData {...props}/>}
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        <div><b>Looking for a job</b>: {props.profile.lookingForAJob ? 'Yes' : 'No'} </div>
        <div><b>My professional skills</b>: {props.profile.lookingForAJobDescription}</div>
        <div><b>About me</b>: {props.profile.aboutMe}</div>
        <div>
            <b>Contacts :</b>
            {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                }
            )}
        </div>


    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
}

export default MyProfile;