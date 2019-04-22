import axios from 'axios'
import Vue from 'vue'
axios.defaults.baseURL=''


// 设置拦截器 (回调函数)
axios.interceptors.request.use(
    function(config) {
    //   if (config.url.indexOf('/login') == -1) {
    //     config.headers.Authorization = window.sessionStorage.getItem('token')
    //   }
      return config
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )
  
  // 设置拦截器 响应拦截器
  axios.interceptors.response.use(
    function(response) {
    //   Vue.prototype.$message(response.data.meta.msg)
      return response;
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  export default {
    install(Vue) {
      Vue.prototype.$http = axios
    }
  }
  