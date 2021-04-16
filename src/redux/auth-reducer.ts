import {authAPI, ResultCodeCaptchaEnum, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
})

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
})

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me()

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string): ThunkType => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}



export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export default authReducer;