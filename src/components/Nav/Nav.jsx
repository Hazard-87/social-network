import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
// import classNames from 'classnames';

const Nav = (props) => {
    const friendsElements = () => {
        props.friends.map((friend, index) => <Friends key={index} name={friend.name} ava={friend.ava}/>)
    }

        return (
            <nav className={classes.nav}>

                <div className={classes.item}><NavLink to='/friends'
                                                       activeClassName={classes.active}>Friends</NavLink>
                </div>
                {friendsElements}
            </nav>
        )
    }


export default Nav;