import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, requestUsers, requestMoreUsers,
    setCurrentPage,
    unfollow
} from "../../redux/usersReducer";
import {compose} from "redux";
import {getUsers, getFollowingInProgress, getPageSize, getCurrentPage, getIsFetching, getTotalPageCount} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalPageCount: state.usersPage.totalPageCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

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
    // withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers, requestMoreUsers})
)(UsersContainer)
