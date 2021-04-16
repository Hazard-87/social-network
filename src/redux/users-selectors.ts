import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";
import {UsersType} from "../types/types";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,
    (users: Array<UsersType>) => {
        return users.filter(user => true)
    })

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalPageCount = (state: AppStateType) => {
    return state.usersPage.totalPageCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}