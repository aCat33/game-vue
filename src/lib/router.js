import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const home = () => import('../components/home/home.vue')
const bannerConfig = () => import('../components/homeConfig/bannerConfig.vue')
const quickEntey = () => import('../components/homeConfig/quickEntry.vue')
const bannerResource = () => import('../components/bannerConfigs/bannerResource.vue')
const themeCard = () => import('../components/homeConfig/themeCard.vue')
const aBannerConfig= () => import('../components/applyConfigs/aBannerConfig.vue')
const aQuickEnter= () => import('../components/applyConfigs/aQuickEnter.vue')
const aThemeCard= () => import('../components/applyConfigs/aThemeCard.vue')
const eQuickEnter= () => import('../components/enterResource/eQuickEnter.vue')

let routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'首页',
        component:home
    },
    {
        path:'/bannerConfig',
        name:'首页banner配置',
        component:bannerConfig
    },
    {
        path:'/quickEntry',
        name:'首页快速进入',
        component:quickEntey
    },  
    {
        path:'/themeCard',
        name:'首页tab主题卡片配置',
        component:themeCard
    },
    {
        path:'/aBannerConfig',
        name:'应用banner配置',
        component:aBannerConfig
    },
    {
        path:'/aQuickEnter',
        name:'应用快速入口配置',
        component:aQuickEnter
    },
    {
        path:'/aThemeCard',
        name:'应用tab主题卡片配置',
        component:aThemeCard
    },
    {
        path:'/bannerResource',
        name:'banner配置资源',
        component:bannerResource
    },
    {
        path:'/eQuickEnter',
        name:'快捷入口资源库管理',
        component:eQuickEnter
    },]

let router = new VueRouter({
    routes
})

export default router