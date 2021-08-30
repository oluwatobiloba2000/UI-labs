import home from '../../home';

export const route = [
    {
        path: '/',
        name: 'home',
        page: home,
        icon: 'home',
        exact: true,
        requiresAuth: false,
        meta: {
            title: 'Home',
            description: 'Home page',
            keywords: 'Home, Home page',
        },
    }
]