let initialState = {friends: [
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
    ]}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;