// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import Axios from 'axios'

import VueAxios from 'vue-axios'

// 作用： 将 axios 绑定到 vue 实例中
//       就可以通过  this.axios.get 去请求数据
Vue.use(VueAxios, Axios)


// 定义钱的过滤器
Vue.filter("money", function(data) {
  return "￥" + data;
})


// 引入了store状态对象
import store from "@/store/car"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,     // 确保所有组件都可以通过 $store 来访问此对象
  router,    // router: router   说明采用路由配置， ES6，当属性名和属性值名称一样时，可以省略不写    
  components: { App },  // 局部组件，说明应用了 App 组件
  template: '<App/>'
})
