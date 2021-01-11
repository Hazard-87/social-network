import React from 'react';
import classes from './Chatbar.module.css';
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validation/validators";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const Chatbar = (props) => {
    let messageElements = props.messagesPage.messages.map((m, index) => <Chat key={index} message={m.message} avatar={m.ava} id={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
        values.newMessageBody = ''
    }

    return (
       <div>
           <div className={classes.container}>
               <div className={classes.message}>
                {messageElements}
               </div>
           </div>
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