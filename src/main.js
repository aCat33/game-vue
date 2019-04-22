import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './lib/router'
// import routes from './routes'

import http from './lib/http'
Vue.use(http)

import Vuex from 'vuex'
Vue.use(Vuex)


// 模板引用
// import condition from './components/templete/condition.vue'
// Vue.component('condition',condition)


new Vue({
  render: h => h(App),
  router,
  
}).$mount('#app')
