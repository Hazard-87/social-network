import {usersAPI} from "../api/api";
import {UsersType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_MORE_USERS = 'SET_MORE_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 20,
    totalPageCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                // users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_MORE_USERS: {
            let users = state.users.concat(action.users)
            return {...state, users: users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_PAGE_SIZE: {
            return {...state, pageSize: action.pageSize}
        }
        case SET_TOTAL_PAGE_COUNT: {
            return {...state, totalPageCount: action.totalPageCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = FollowAcceptType | UnfollowAcceptType | SetUsersType | SetMoreUsersType | SetCurrentPageType |
    SetPageSizeType | SetTotalPageCountType | IsFetchingType | ToggleFollowingProgressType

type FollowAcceptType = {
    type: typeof FOLLOW
    userId: number
}

type UnfollowAcceptType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

type SetMoreUsersType = {
    type: typeof SET_MORE_USERS
    users: Array<UsersType>
}

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type SetPageSizeType = {
    type: typeof SET_PAGE_SIZE
    pageSize: number
}

type SetTotalPageCountType = {
    type: typeof SET_TOTAL_PAGE_COUNT
    totalPageCount: number
}

type IsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const followAccept = (userId: number): FollowAcceptType => ({type: 'FOLLOW', userId})
export const unfollowAccept = (userId: number): UnfollowAcceptType => ({type: 'UNFOLLOW', userId})
export const setUsers = (users: Array<UsersType>): SetUsersType => ({type: 'SET_USERS', users})
export const setMoreUsers = (users: Array<UsersType>): SetMoreUsersType => ({type: 'SET_MORE_USERS', users})
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setPageSize = (pageSize: number): SetPageSizeType => ({type: 'SET_PAGE_SIZE', pageSize})
export const setTotalPageCount = (totalPageCount: number): SetTotalPageCountType => ({type: 'SET_TOTAL_PAGE_COUNT', totalPageCount})
export const toggleIsFetching = (isFetching: boolean): IsFetchingType => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalPageCount(data.totalCount))
    }
}

export const requestMoreUsers = (nextPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(nextPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setMoreUsers(data.items))
        dispatch(setTotalPageCount(data.totalCount))
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await usersAPI.getFollow(userId)
        if (data.resultCode == 0) {
            dispatch(followAccept(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await usersAPI.getUnfollow(userId)
        if (data.resultCode == 0) {
            dispatch(unfollowAccept(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducer;