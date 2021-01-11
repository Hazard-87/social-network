import React from "react";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state : {
        messagesPage: {
            dialogs: [
                {
                    id: 2,
                    name: 'Polina',
                    ava: 'http://www.youloveit.ru/uploads/posts/2018-03/1520168825_youloveit_ru_ariana_grande_emoji_avatarki01.jpg'
                },
                {
                    id: 3,
                    name: 'Alina',
                    ava: 'https://trikky.ru/wp-content/blogs.dir/1/files/2018/06/1520168801_youloveit_ru_ariana_grande_emoji_avatarki18.jpg'
                },
                {
                    id: 4,
                    name: 'Evelina',
                    ava: 'http://www.youloveit.ru/uploads/posts/2018-03/1520168814_youloveit_ru_ariana_grande_emoji_avatarki09.jpg'
                },
                {id: 5, name: 'Papa', ava: 'https://steepbend.ru/wp-content/uploads/2013/04/Avatarki.jpg'},
                {
                    id: 6,
                    name: 'Mama',
                    ava: 'http://www.youloveit.ru/uploads/posts/2018-06/1528544211_youloveit_ru_avatarki_disney_princessy_ralf_protiv_interneta03.png'
                },
                {id: 7, name: 'Max', ava: 'https://1message.ru/wp-content/uploads/2017/03/ustanovka-avatarki7.jpg'},
                {id: 8, name: 'Brat', ava: 'https://download-cs.net/steam/avatars/3412.jpg'}
            ],
            messages: [
                {id: 1, message: 'На Avatarko.ru', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'},
                {id: 2, message: 'Паблик в котором💜', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'},
                {id: 3, message: 'Hi', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'},
                {id: 4, message: 'I\'m norm', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'},
                {id: 5, message: 'I\'m learn a react', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'},
                {id: 6, message: 'Perfect', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'},
                {id: 7, message: 'Good like', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'}
            ],
            createMessage: ''
        },
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?', likesCount: 5},
                {id: 2, post: 'It\'s my first post', likesCount: 32},
                {id: 3, post: 'I\'m learn react from it-kamasutra.com', likesCount: 3},
            ],
            newPostText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Polina',
                    ava: 'http://www.youloveit.ru/uploads/posts/2018-03/1520168825_youloveit_ru_ariana_grande_emoji_avatarki01.jpg'
                },
                {
                    id: 2,
                    name: 'Alina',
                    ava: 'https://trikky.ru/wp-content/blogs.dir/1/files/2018/06/1520168801_youloveit_ru_ariana_grande_emoji_avatarki18.jpg'
                },
                {
                    id: 3,
                    name: 'Evelina',
                    ava: 'http://www.youloveit.ru/uploads/posts/2018-03/1520168814_youloveit_ru_ariana_grande_emoji_avatarki09.jpg'
                }
            ]
        }
    },
    getState () {
        return this._state
    },
    _Rerender () {
        console.log('hello')
    },
    getRerender () {
        return this._Rerender
    },
    // addPost () {
    //     let createPost = {
    //         id: 4,
    //         post: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     if (this._state.profilePage.newPostText != '') {
    //         this._state.profilePage.posts.unshift(createPost)
    //     }
    //     this._state.profilePage.newPostText = ''
    //     this._Rerender(this._state)
    // },
    // addMessage () {
    //     let createMessage = {
    //         id: 8,
    //         message: this._state.messagesPage.createMessage,
    //         ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'
    //     }
    //     if (this._state.messagesPage.createMessage != '') {
    //         this._state.messagesPage.messages.push(createMessage)
    //     }
    //     this._state.messagesPage.createMessage = ''
    //     this._Rerender(this._state)
    // },
    // onPostChange (createText) {
    //     this._state.profilePage.newPostText = createText
    //     this._Rerender(this._state)
    // },
    // onCreateMessage (createMessage) {
    //     this._state.messagesPage.createMessage = createMessage
    //     this._Rerender(this._state)
    // },
    subscribe (observer) {
        this._Rerender = observer
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._Rerender(this._state)
    }
}



// export default store;
// window.store = store;
