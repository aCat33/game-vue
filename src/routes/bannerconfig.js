import bannerconfig from '../components/C/bannerconfig.vue'
import router from './index'

let routes = [
    {
        path: '/bannerconfig',
        name: 'bannerconfig',
        component: bannerconfig
    }]

router.addRoutes(routes);