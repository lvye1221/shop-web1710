<template>
  <div>
      <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
                <a href="#/">首页</a>
                
                <!-- 
                    <slot></slot> 
                    代表从父组件传递过来的数据
                 -->
                <span>
                    <slot></slot>
                </span>
                <!-- <span>热门商品</span> -->
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBread'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
