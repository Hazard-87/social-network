import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import classNames from 'classnames';

class Nav extends React.Component {
    friendsElements = () => {
        this.props.friends.map(f => <Friends name={f.name} ava={f.ava}/>)
    }

    render() {
        return (
            <nav className={classes.nav}>
                <div className={classes.item}><NavLink to={`/profile`}
                                                       activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/news'
                                                       activeClassName={classes.active}>News</NavLink></div>
                <div className={classes.item}><NavLink to='/messages'
                                                       activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/music'
                                                       activeClassName={classes.active}>Music</NavLink></div>
                <div className={classes.item}><NavLink to='/users'
                                                       activeClassName={classes.active}>Users</NavLink></div>
                <div className={classes.item}><NavLink to='/settings'
                                                       activeClassName={classes.active}>Settings</NavLink>
                </div>
                <div className={classes.item}><NavLink to='/friends'
                                                       activeClassName={classes.active}>Friends</NavLink>
                </div>
                {this.friendsElements}
            </nav>
        )
    }
}

export default Nav;