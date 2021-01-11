import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs} >
            <div className={classes.dialog}><NavLink to={'/messages/'+props.id}
                                                     activeClassName={classes.active}>
                <div className={classes.img}><img src={props.ava} /></div>
                {props.name}
            </NavLink></div>
        </div>
    )
}

export default Dialogs;