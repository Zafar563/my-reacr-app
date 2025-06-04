import Home from './pages/Home/home';
import About from './pages/About/about';
import Services from './pages/Services/Services';
import Achviments from './pages/Achviments/achviments';

let routes = [
    {
        id:1,
        path: '/',
        component: Home,
        exact: true
    },
     {
        id:2,
        path: '/services',
        component: Services,
    },
    {
        id:3,
        path: '/achviments',
        component: Achviments
    },
    {
        id:4,
        path: '/about',
        component: About
    }, 
   
    
]

export default routes;