import Vue from 'vue'
import Router from 'vue-router'

//   @ 代表我们项目文件 src 此目录
import HelloWorld from '@/components/HelloWorld'
import ProjectList from '@/page/ProjectList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',                    // 路径，根路径
      name: 'ProjectList',           // 路由名字
      component: ProjectList         // 使用哪个组件
    }
  ]
})
