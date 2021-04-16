import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers, requestMoreUsers,
    setCurrentPage,
    unfollow, setPageSize
} from "../../redux/users-reducer";
import {compose} from "redux";
import {getUsers, getFollowingInProgress, getPageSize, getCurrentPage, getIsFetching, getTotalPageCount} from "../../redux/users-selectors";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    totalPageCount: number
    isFetching: boolean
    users: Array<UsersType>
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    requestMoreUsers: (nextPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number, pageSize: number) => void
    onMorePage: (pageNumber: number) => void
    setCurrentPage: (currentPage: number) => void
    setPageSize: (pageSize: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number, pageSize: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setPageSize(pageSize)
        this.props.requestUsers(pageNumber, pageSize)
    }

    onMorePage = (nextPage: number) => {
        this.props.setCurrentPage(nextPage)
        this.props.requestMoreUsers(nextPage, this.props.pageSize)
    }

    render() {
        return <Users totalPageCount={this.props.totalPageCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      onPageChanged={this.onPageChanged}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      onMorePage={this.onMorePage}
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalPageCount: getTotalPageCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose (
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setPageSize, requestUsers, requestMoreUsers})
)(UsersContainer)
