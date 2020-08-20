const initialState = {
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
};

const headerReducer = (state = initialState) => state;

export default headerReducer;