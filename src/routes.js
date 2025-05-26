import Home from './pages/home';

import About from './pages/about';
let routes = [
    {
        id:1,
        path: '/',
        component: Home,
        exact: true
    },
    {
        id:2,
        path: '/about',
        component: About
    }
]

export default routes;