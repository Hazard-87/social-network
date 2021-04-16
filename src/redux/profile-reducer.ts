import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SET_EDIT_MODE = 'SET_EDIT_MODE'

let initialState = {
    posts: [
        {id: 3, post: 'Hi, how are you?', likesCount: 5},
        {id: 2, post: 'It\'s my first post', likesCount: 32},
        {id: 1, post: 'I\'m learn react from it-kamasutra.com', likesCount: 3},
    ] as Array<PostType>,
    profile: [] as Array<ProfileType>,
    status: '',
    editMode: false
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
                ...state, profile: {...state.profile, photos: action.photos} as Array<ProfileType>
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

type ActionsTypes = AddPostActionCreatorType | SetUserProfileType | SetStatusType | SavePhotoSuccessType | SetEditModeType;

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostBody: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: Array<ProfileType>
}

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

type SetEditModeType = {
    type: typeof SET_EDIT_MODE
    data: boolean
}

export const addPostActionCreator = (newPostBody: string):AddPostActionCreatorType => ({type: 'ADD_POST', newPostBody})
export const setUserProfile = (profile: Array<ProfileType>): SetUserProfileType => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status: string): SetStatusType => ({type: 'SET_STATUS', status})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: 'SAVE_PHOTO_SUCCESS', photos})
export const setEditMode = (data: boolean): SetEditModeType => ({type: 'SET_EDIT_MODE', data})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;