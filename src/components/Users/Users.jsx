import React from "react";
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";
// import userPhoto from '../../assets/images/user.png';
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';




let Users = (props) => {
    let p = props.currentPage + 1

    return <div>
        <Paginator totalPageCount={props.totalPageCount} pageSize={props.pageSize}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {props.isFetching && <div className={classes.preloader}><Preloader/></div>}
        <div className={classes.container}>
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
                            {user.photos.large != null ?
                            <img src={user.photos.large} /> :<Avatar shape="square" size={128} icon={<UserOutlined />} />}
                        </div>
                        <div>{user.name}</div>
                        <div className={classes.status}>{user.status}</div>
                        </NavLink>
                        </span>
            </div>
        )
        }
        </div>
        <button className={classes.more} onClick={(e) => {
            props.onMorePage(p)
        }}>Show more</button>
    </div>
}


export default Users;