import React from "react";
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import {Avatar, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import {Card} from 'antd';

const {Meta} = Card;

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
                    }} className={classes.follow}>follow</button>
                }
                </div>
                <NavLink to={'/profile/' + user.id}>
                    <Card
                        hoverable
                        style={{width: 240}}
                        cover={user.photos.large != null ?
                            <img src={user.photos.large}/> :
                            <Avatar shape="square" size={240} icon={<UserOutlined/>}/>}>
                        <Meta title={user.name} description={user.status}/>
                    </Card>
                </NavLink>
                </span>
            </div>
            )
            }
        </div>
        <Button className={classes.more} onClick={(e) => {
            props.onMorePage(p)
        }}>Show more
        </Button>
    </div>
}

export default Users;