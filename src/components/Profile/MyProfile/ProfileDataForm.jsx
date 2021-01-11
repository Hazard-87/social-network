import React from "react";
import {Field, reduxForm} from "redux-form";
import {Checked, Input} from "../../common/FormsControls/FormsControl";
import {Textarea} from "../../common/FormsControls/FormsControl";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import makeStyles from "@material-ui/core/styles/makeStyles";


const ProfileDataForm = (props) => {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
        field: {
            margin: theme.spacing(1),
            width: '40ch',
        },
        input: {
            margin: theme.spacing(1),
            width: '25ch'
        }
    }));
    const classes = useStyles();

    return <form onSubmit={props.handleSubmit}>
        <div><b> Full name: <Field className={classes.input} component={Input} name={'fullName'} type='input'/></b></div>
        <div><b>looking for a job</b>: <Field  component={Checked} name={'lookingForAJob'} type='checkbox'/></div>
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
        <Button onClick={props.handleSubmit} variant="contained"
                color="primary" size="small" className={classes.button}
                startIcon={<SaveIcon/>}>save</Button>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm;