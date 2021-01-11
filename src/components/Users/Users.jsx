import React from "react";
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/images/user.png';
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    let p = props.currentPage + 1

    return <div className={classes.body}>
        <Paginator totalPageCount={props.totalPageCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {props.isFetching && <div className={classes.preloader}><Preloader/></div>}
        {props.users.map(user =>
            <div key={user.id}>
            <span className={props.isFetching ? classes.hide : classes.user}>
                <div>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unfollow(user.id)
                    }} className={classes.unfollow}>unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.follow(user.id)
                    }} className={classes.follow}>follow</button>}
                        </div>
                        <NavLink to={'/profile/' + user.id}>
                        <div className={classes.img}>
                            <img src={user.photos.large != null ? user.photos.large : userPhoto}/>
                        </div>
                        <div>{user.name}</div>
                        <div className={classes.status}>{user.status}</div>
                        </NavLink>
                        </span>
            </div>
        )
        }
        <button className={classes.more} onClick={(e) => {
            props.onMorePage(p)
        }}>Show more</button>
    </div>
}


export default Users;