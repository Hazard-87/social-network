import React, {useState} from 'react';
import styles from './MyProfile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from "./ProfileDataForm";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {Grid} from "@material-ui/core";


const MyProfile = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles()

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

    return (
        <Grid direction="row" container justify="flex-start">
            <Grid sm={4} className={styles.avatar}>
                <img src={!props.profile.photos.large ? userPhoto : props.profile.photos.large}/>
                {props.isOwner &&
                <div className={classes.root}>
                    <input accept="image/*" className={classes.input} id="icon-button-file"
                           type="file" onChange={onSelectedPhoto}/>
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                </div>}
            </Grid>
            <Grid sm={7}>
                <div><b>{props.profile.fullName}</b></div>
                <ProfileStatusWithHooks {...props} status={props.status} updateStatus={props.updateStatus}/>
                {props.editMode
                    ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} {...props}/>
                    : <ProfileData {...props}/>}
            </Grid>
        </Grid>
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
    return <div className={styles.contact}><b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
}

export default MyProfile;