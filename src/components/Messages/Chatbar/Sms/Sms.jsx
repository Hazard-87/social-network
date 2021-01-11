import React from 'react';
import classes from './Sms.module.css';


const Sms = () => {

    let newCreateMessage = React.createRef()

    let newMessage = () => {
        let newMessage = newCreateMessage.current.value
        alert(newMessage)
        newCreateMessage.current.value = ''
    }

    return (
        <div>
            <div>
                <textarea className={classes.sms} ref={newCreateMessage} rows='2' cols='75' type='text'></textarea>
            </div>
            <div>
                <button className={classes.chatSend} onClick={newMessage}>Send</button>
            </div>
        </div>
    )
}

export default Sms;