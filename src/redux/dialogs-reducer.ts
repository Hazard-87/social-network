const SEND_MESSAGE = 'SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
    ava: string
}

type MessageType = {
    id: number
    message: string
    ava: string
}

let initialState = {
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
        { id: 5, name: 'Papa', ava: 'https://steepbend.ru/wp-content/uploads/2013/04/Avatarki.jpg' },
        {
            id: 6,
            name: 'Mama',
            ava: 'http://www.youloveit.ru/uploads/posts/2018-06/1528544211_youloveit_ru_avatarki_disney_princessy_ralf_protiv_interneta03.png'
        },
        { id: 7, name: 'Max', ava: 'https://1message.ru/wp-content/uploads/2017/03/ustanovka-avatarki7.jpg' },
        { id: 8, name: 'Brat', ava: 'https://download-cs.net/steam/avatars/3412.jpg' }
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'На Avatarko.ru', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg' },
        { id: 2, message: 'Паблик в котором💜', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg' },
        { id: 3, message: 'Hi', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg' },
        { id: 4, message: 'I\'m norm', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg' },
        { id: 5, message: 'I\'m learn a react', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg' },
        { id: 6, message: 'Perfect', ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg' }
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: SendMessageCreatorActionType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 8, message: action.newMessageBody, ava: 'https://gg-pro.ru/files/avatars/1564818111.jpg'
                }]
            }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const addMessageCreateAction = (newMessageBody: string): SendMessageCreatorActionType => ({ type: 'SEND_MESSAGE', newMessageBody })

export default dialogsReducer;