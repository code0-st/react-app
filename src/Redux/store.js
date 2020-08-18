let store = {
    _state: {
        header: {
            headerNavigation: [
                {
                    id: 0,
                    href: "/programming",
                    title: "Программирование"
                },
                {
                    id: 1,
                    href: "/design",
                    title: "Дизайн"
                },
                {
                    id: 2,
                    href: "/marketing",
                    title: "Маркетинг"
                },
                {
                    id: 3,
                    href: "/music",
                    title: "Музыка"
                },
                {
                    id: 4,
                    href: "/films",
                    title: "Фильмы"
                },
            ],
        },

        sidebar: {
            popularAuthors: [
                {
                    id: 0,
                    imgSrc: 'https://sun9-27.userapi.com/c857332/v857332517/4e204/ajOyC4TVwJ8.jpg',
                    name: 'Абрахам Тугалов',
                },
                {
                    id: 1,
                    imgSrc: 'https://sun2-4.userapi.com/c857328/v857328904/18d6df/hXkzYx_3QAY.jpg',
                    name: 'Владилен Минин',
                },
                {
                    id: 2,
                    imgSrc: 'https://sun9-49.userapi.com/c856036/v856036795/1bd10a/MeUsoXHb5Vo.jpg',
                    name: 'Дмитрий Кузюбердин',
                }
            ],
            sidebarNavigation: [
                {
                    id: 0,
                    href: '/me',
                    title: 'Профиль',
                },
                {
                    id: 1,
                    href: '/feed',
                    title: 'Новости',
                },
                {
                    id: 2,
                    href: '/authors',
                    title: 'Авторы',
                },
            ],
            socialShare: [
                {
                    id: 0,
                    imgSrc: 'https://cdn.icon-icons.com/icons2/832/PNG/512/vk_icon-icons.com_66681.png',
                    href: 'https://vk.com',
                    title: 'Vkontakte',
                },
                {
                    id: 1,
                    imgSrc: 'https://www.freeiconspng.com/uploads/facebook-png-02-15.png',
                    href: 'https://ru-ru.facebook.com',
                    title: 'Facebook',
                },
                {
                    id: 2,
                    imgSrc: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Instagram_icon-icons.com_66804.png',
                    href: 'https://www.instagram.com',
                    title: 'Instagram',
                },
            ],
        },

        content: {
            profilePage: {
                myPosts: [],

                newPost: '',
            },

            feedPage: {},
            authorsPage: {},

        }
    },
    _rerender() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerender = observer;
    }
}

export default store;

