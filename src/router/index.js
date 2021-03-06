import Vue from 'vue'
import Router from 'vue-router'

//   @ 代表我们项目文件 src 此目录
import HelloWorld from '@/components/HelloWorld'

import ProjectList from '@/page/ProjectList'
import Cart from '@/page/Cart'
import Address from '@/page/Address'
import OrderConfirm from '@/page/OrderConfirm'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',                    // 路径，根路径
      name: 'ProjectList',           // 路由名字
      component: ProjectList         // 使用哪个组件
    },
    {
      path: '/cart',                  // 购物车
      name: 'Cart',                   // 路由名字
      component: Cart          // 使用哪个组件
    },
    {
      path: '/address',                  // 订单中的 地址
      name: 'Address',                   // 路由名字
      component: Address                 // 使用哪个组件
    },
    {
      path: '/orderConfirm',                  // 订单中的 地址
      name: 'OrderConfirm',                   // 路由名字
      component: OrderConfirm                 // 使用哪个组件
    }
  ]
})
