

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const ES6 定义变量，不可更改 ==> 常量
// 定义了一种数据状态，作用：可以在各个组件中，传递数据
var store = new Vuex.Store({
    state: {       // 状态
      num: 100       // 购物车的数量
    },
    mutations: {    // 状态函数，用于更改状态
      add (state) {     // 函数名，    state 当前store中的状态
        state.num ++
      }
    }
})

// 暴露出当前的对象
export default store
