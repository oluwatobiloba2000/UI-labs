import Documentation from '../pages/docs';
import home from '../pages/home';

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
    },
    {
        path: '/docs',
        name: 'docs',
        page: Documentation,
        icon: 'docs',
        exact: true,
        requiresAuth: false,
        meta: {
            title: 'Documentation',
            description: 'UI Labs documentation',
            keywords: 'UI designs, UI labs, react components, prebuilt react component documentation, chakra ui documentatio',
        },
    }
]