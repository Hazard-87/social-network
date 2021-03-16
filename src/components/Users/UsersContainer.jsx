import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers, requestMoreUsers,
    setCurrentPage,
    unfollow, setPageSize
} from "../../redux/usersReducer";
import {compose} from "redux";
import {getUsers, getFollowingInProgress, getPageSize, getCurrentPage, getIsFetching, getTotalPageCount} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber, pageSize) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setPageSize(pageSize)
        this.props.requestUsers(pageNumber, pageSize)
    }
    onMorePage = (nextPage) => {
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

let mapStateToProps = (state) => {
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
