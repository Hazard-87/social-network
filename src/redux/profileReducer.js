import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SET_EDIT_MODE = 'SET_EDIT_MODE'

let initialState = {
    posts: [
        {id: 3, post: 'Hi, how are you?', likesCount: 5},
        {id: 2, post: 'It\'s my first post', likesCount: 32},
        {id: 1, post: 'I\'m learn react from it-kamasutra.com', likesCount: 3},
    ],
    profile: [],
    status: '',
    editMode: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 4, post: action.newPostBody, likesCount: 0}]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        case SET_EDIT_MODE: {
            return {
                ...state, editMode: action.data
            }
        }
        default:
            return state;
    }
}

export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
        // dispatch(stopSubmit("edit-profile", {"contacts" : {'facebook': response.data.messages[0]}}))
    }
}

export const addPostAC = (newPostBody) => ({type: 'ADD-POST', newPostBody})
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})
export const savePhotoSuccess = (photos) => ({type: 'SAVE_PHOTO_SUCCESS', photos})
export const setEditMode = (data) => ({type: 'SET_EDIT_MODE', data})

export default profileReducer;