import axios from "axios";
import { ProfileType } from "../types/types";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "e48e9649-c731-4063-bdca-82c75640897b"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getFollow(id: number) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getUnfollow(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`profile/photo`, formData
        )
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeCaptchaEnum {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeCaptchaEnum
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>('auth/me').then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}
