import React from 'react';
import classes from './Chat.module.css';

const Chat = (props) => {
    return (

        <div className={classes.chat} >
            <div className={classes.message} >
                <div className={classes.img}><img src={props.avatar} /></div>
                <div className={classes.text}>{props.message}</div >
            </div>
        </div>
    )
}

export default Chat;