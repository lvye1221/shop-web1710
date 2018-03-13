
<template>
  <div id="app">
    
    <nav-header></nav-header>

    <router-view/>           
    <!-- 路由，根据我们的路径，可以替换不同的内容 -->

    <nav-footer></nav-footer>
  </div>
</template>

<script>

// 导入新建好的组件
// import  ES6 导入的代码，是关键字，类似于 var
import NavHeader from "./components/NavHeader"
import NavFooter from "./components/NavFooter"

export default {
  name: 'App',
  components: {  
    NavHeader,
    NavFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
