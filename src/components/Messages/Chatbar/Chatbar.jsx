import React from 'react';
import styles from './Chatbar.module.css';
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validation/validators";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";


const Chatbar = (props) => {
    let messageElements = props.messagesPage.messages.map(m => <Chat message={m.message} avatar={m.ava} id={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
        values.newMessageBody = ''
    }

    return (
        <Grid container direction="column" className={styles.chatbar}>
            <Grid xs={12}>
            {messageElements}
            </Grid>
            <Grid xs={12}>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </Grid>
        </Grid>
    )
}

const AddMessageForm = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '50px',
                marginRight: '13px',
                marginBottom: '10px',
                position: 'fixed',
                top: '545px',
                left: '1165px'
            }
        },
        field: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '70ch',
                position: 'fixed',
                top: '530px'
            }
        }
    }));
    const classes = useStyles();

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.field}>
                <Field className={styles.field} component={Textarea} name={'newMessageBody'} label={'Chat'}/>
            </div>
            <div className={classes.root}>
                <Button onClick={props.handleSubmit} variant="contained" color="primary"
                        className={classes.button} endIcon={<Icon>send</Icon>}>

                </Button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Chatbar;