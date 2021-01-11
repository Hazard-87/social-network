import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_MORE_USERS = 'SET_MORE_USERS'
const SET_СURRENT_PAGE = 'SET_СURRENT_PAGE'
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
let initialState = {
    users: [],
    pageSize: 8,
    totalPageCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
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
        case SET_СURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
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

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalPageCount(data.totalCount))
    }
}

export const requestMoreUsers = (nextPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(nextPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setMoreUsers(data.items))
        dispatch(setTotalPageCount(data.totalCount))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await usersAPI.getFollow(userId)
        if (data.resultCode == 0) {
            dispatch(followAccept(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
       let data = await usersAPI.getUnfollow(userId)
            if (data.resultCode == 0) {
                dispatch(unfollowAccept(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
    }
}

export const followAccept = (userId) => ({type: 'FOLLOW', userId})
export const unfollowAccept = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET_USERS', users})
export const setMoreUsers = (users) => ({type: 'SET_MORE_USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET_СURRENT_PAGE', currentPage})
export const setTotalPageCount = (totalPageCount) => ({type: 'SET_TOTAL_PAGE_COUNT', totalPageCount})
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
})
export default usersReducer;