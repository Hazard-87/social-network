import React from "react";
import {Field, reduxForm} from "redux-form";
import { Input} from "../../common/FormsControls/FormsControl";
import {Textarea} from "../../common/FormsControls/FormsControl";
import classes from './MyProfile.module.css'


const ProfileDataForm = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div><b> Full name: <Field className={classes.input} component={Input} name={'fullName'} type='input'/></b></div>
        <div><b>looking for a job</b>: <Field  component={Input} name={'lookingForAJob'} type='checkbox'/></div>
        <div><b>My professional skills</b>: <Field className={classes.field} component={Textarea}
                                                   name={'lookingForAJobDescription'} type='input'/></div>
        <div><b>About me</b>: <Field className={classes.field} component={Textarea} name={'aboutMe'} type='input'/></div>
        <div><b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
                return <div>
                    {key} : <Field component={Input} name={'contacts.' + key} placeholder={key}
                                   type='input'/>
                </div>
            }
        )}
        </div>
        {props.error && <div className={classes.formSummaryError}>
            {props.error}
        </div>}
        <button onClick={props.handleSubmit} className={classes.button}>save</button>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;