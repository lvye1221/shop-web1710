<template>
  <div >
      

      <div class="site-header" style="clear:both;">
        <div class="container">
            <div class="header-logo">
                <a href="#/" title="小米官网"><img src="/static/img/logo.png" /></a>
            </div>
            <div class="header-nav">
                <ul class="nav-list">
                    <li class="nav-category">
                        <a class="btn-category-list" href="catalog.php" style="display:none;">全部商品分类</a>
                    </li>
                    <li class="nav-item">
                        <a class="link" href="category.php?id=76">
                            <!-- <span>电子产品</span> -->
                        </a>
                        <div class='item-children'>
                            <div class="container">
                                <ul class="children-list clearfix">
                                    <li class="first">
                                        <div class="figure figure-thumb">
                                            <a href="goods.php?id=27"><img src="" alt="小米电视2 40英寸"></a>
                                        </div>
                                        <div class="title"><a href="goods.php?id=27">小米电视2 40英寸</a></div>
                                        <p class="price">2200<em>元</em>元</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <div class="container-user"> -->
            <div class="topbar-cart" id="ECS_CARTINFO">
                <a class="cart-mini " href="#/cart">
                    <i class="iconfont">&#xe60c;</i> 购物车
                    <span class="mini-cart-num J_cartNum" id="hd_cartnum">({{carnum}})</span>
                </a>
            </div>
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName==''">
                <a class="link" href="#" rel="nofollow" v-on:click="showModal">登录</a>
                <span class="sep">|</span>
                <a class="link" href="user.php?act=register" rel="nofollow">注册</a>
            </div>
            
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName!=''">
                {{userName}}

                <a class="link" href="javascript:void(0)" rel="nofollow" v-on:click="logout">退出</a>
            </div>
                
            <!-- </div> -->
        </div>
        <div id="J_navMenu" class="header-nav-menu" style="display: none;">
            <div class="container"></div>
        </div>
    </div>

    
    <!-- 给组件添加属性 md-show 
        传递的mdShow 是1个字符串，
        "false" 表达式的结果是真
    <login-modal md-show="false"></login-modal>

    v-bind 代表取表达式的  "true" ==> true

     v-on:guanbi="closeModal"

     当父组件收到 guanbi 事件时，执行 closeModal 方法
    -->

    <login-modal 
        v-bind:md-show="showLogin"
        v-on:guanbi="closeModal"
        v-on:chenggong="loginOK"
    ></login-modal>

  </div>
</template>


<script>

import LoginModal from "@/components/LoginModal"

export default {
  name: 'NavHeader',
  components: {
      LoginModal
  },
  
  computed: {
      carnum: function() {  // 定义1个数据， carnum
        //   返回状态管理器中保存的 购物车数
          return this.$store.state.num;
      }
  },

  mounted: function() {

    //   alert( this.$store.state.num )


      this.axios.get("/api/users/checkLogin")
        .then( (res) => {
            // console.log(res)
            var data = res.data

            if (data.status == "0") {
                // 说明已经登陆
                this.userName = data.result;

            } else {
                // 说明没有登陆
                this.userName = "";
            }
        })

  },

  data() {
      return {
          showLogin: false,
          userName: ""      // 保存的用户名
      }
  },
  methods: {
      logout() {
        //   alert("退出")

        this.axios.post("/api/users/logout")
            .then( (res) => {
                var data = res.data
                if (data.status == "0") {
                    // 说明退出成功
                    this.userName = ""
                }
            })
      },

      loginOK(userName) {
        this.userName = userName   // 保存登陆的用户名
        
        console.log(this.userName)
        
        this.closeModal();         // 关闭对话框
      },

      showModal() {
          this.showLogin = true
      },
      
      closeModal() {     // 关闭登陆对话框
          this.showLogin = false
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
