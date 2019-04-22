import home from '../components/home/home.vue'
import router from './index'

let routes = [
    {
        path: '/',
        name: 'home',
        redirect: 'home'
    },
    {
        path: '/home',
        name: 'home',
        component: home
    }]

router.addRoutes(routes);