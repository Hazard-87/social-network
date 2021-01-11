// import {loginAPI} from "../api/api";
// import React from "react";
//
// const SET_LOGIN_USER = 'SET_LOGIN_USER'
//
// let initialState = {
// data : {
//     email: 'null',
//     password: 'null',
//     rememberMe: false
// }}
//
// const loginReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_LOGIN_USER: {
//             return {
//                 ...state,
//                 ...action.data
//             }
//         }
//         default:
//             return state;
//     }
// }
//
// export const loginThunk = () => {
//     return (dispatch) => {
//         onLoginSubmit()
//             .then(response => {
//                 dispatch(loginAPI.login(response.email, response.password, response.rememberMe))
//         })
//     }
// }
//
// export const onLoginSubmit = (email, password, rememberMe) => ({type: 'SET_LOGIN_USER', data: {email, password, rememberMe}})
//
// export default loginReducer();