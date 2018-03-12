// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,    // router: router   说明采用路由配置， ES6，当属性名和属性值名称一样时，可以省略不写    
  components: { App },  // 局部组件，说明应用了 App 组件
  template: '<App/>'
})
