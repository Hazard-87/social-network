import React from "react";
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import {Avatar, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import {Card} from 'antd';
import {UsersType} from "../../types/types";

const {Meta} = Card;

type PropsType = {
    totalPageCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number, pageSize: number)=> void
    isFetching: boolean
    followingInProgress: Array<number>
    unfollow: (userId: number)=> void
    follow: (userId: number)=> void
    users: Array<UsersType>
    onMorePage: (page: number) => void
}

let Users: React.FC<PropsType> = (
    {
        totalPageCount,
        pageSize,
        currentPage,
        onPageChanged,
        isFetching,
        followingInProgress,
        unfollow,
        follow,
        users,
        onMorePage
    }
) => {
    let p = currentPage + 1

    return <div>
        <Paginator totalPageCount={totalPageCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        {isFetching && <div className={classes.preloader}><Preloader/></div>}
        <div className={classes.container}>
            {users.map(user =>
                    <div key={user.id}>
            <span className={isFetching ? classes.hide : classes.user}>
                <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }} className={classes.unfollow}>unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
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
            onMorePage(p)
        }}>Show more
        </Button>
    </div>
}

export default Users;