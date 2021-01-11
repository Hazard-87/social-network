import React from 'react';
import classes from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import ChatbarContainer from "./Chatbar/ChatbarContainer";

const Messages = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <Dialogs
        name={dialog.name}
        id={dialog.id}
        ava={dialog.ava}/>)



    return (
        <div className={classes.messages}>
            <div>
                {dialogsElements}
            </div>
            <ChatbarContainer/>
        </div>
    )
}

export default Messages;