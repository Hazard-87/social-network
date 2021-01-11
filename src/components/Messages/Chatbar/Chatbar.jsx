import React from 'react';
import classes from './Chatbar.module.css';
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validation/validators";


const Chatbar = (props) => {
    let messageElements = props.messagesPage.messages.map(m => <Chat message={m.message} avatar={m.ava} id={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
        values.newMessageBody = ''
    }

    return (
       <div>
                {messageElements}

                <AddMessageReduxForm onSubmit={addNewMessage}/>
       </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.chatWrap}>
                <div className={classes.field}>
                    <Field component={Textarea} name={'newMessageBody'} label={'Chat'}/>
                </div>
                <div className={classes.root}>
                    <button onClick={props.handleSubmit} variant="contained" color="primary"
                            className={classes.button}>
send
                    </button>
                </div>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Chatbar;