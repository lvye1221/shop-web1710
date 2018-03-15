<template>
  <div>

      <!-- 使用导航组件 -->
    <nav-bread>
        购物车
    </nav-bread>

<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <symbol id="icon-add" viewBox="0 0 31 32">
            <title>添加</title>
            <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
          </symbol>
          <symbol id="icon-edit" viewBox="0 0 32 32">
            <title>编辑</title>
            <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>删除</title>
            <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
            <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          </symbol>
          <symbol id="icon-clock" viewBox="0 0 32 32">
            <title>clock</title>
            <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
          </symbol>
          <symbol id="icon-question" viewBox="0 0 32 32">
            <title>question</title>
            <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
            <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
            <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
          </symbol>
        </defs>
      </svg>

    <div class="container">
        <div class="cart">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>我的购物车</span></h2>
            </div>
            <div class="item-list-wrap">
                <div class="cart-item">
                    <div class="cart-item-head">
                        <ul>
                            <li>商品</li>
                            <li>价格</li>
                            <li>数量</li>
                            <li>小计</li>
                            <li>编辑</li>
                        </ul>
                    </div>
                    <ul class="cart-item-list">
                        <li v-for="(item, index) in cartList" v-bind:key="index">
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascipt:;" class="checkbox-btn item-check-btn" 
                                        v-bind:class="item.checked?'check':''" 
                                        v-on:click="checkItem(index)"
                                        >
                                        <svg class="icon icon-ok">
                                            <use xlink:href="#icon-ok"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <img v-bind:src="'/static/img/' + item.productImage">
                                </div>
                                <div class="cart-item-title">
                                    <div class="item-name">{{item.productName}}</div>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <div class="item-price">{{item.salePrice | money}}</div>
                            </div>
                            <div class="cart-tab-3">
                                <div class="item-quantity">
                                    
    <!-- 计算数量的组件 -->
    <num-counter 
        v-bind:num="item.productNum"
        v-bind:index="index"
        v-on:jian="jian"
        v-on:jia="jia"
    />

                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">
{{item.salePrice * item.productNum | money}}

                                </div>
                            </div>
                            <div class="cart-tab-5">
                                <div class="cart-item-opration">
                                 
                                    <a href="javascript:;" class="item-edit-btn" v-on:click="delItem(index)">
                                        <svg class="icon icon-del">
                                            <use xlink:href="#icon-del"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart-foot-wrap">
                <div class="cart-foot-inner">
                    <div class="cart-foot-l">
                        <div class="item-all-check">
                            <a href="javascipt:;" v-on:click="checkAll">
                                <span class="checkbox-btn item-check-btn" v-bind:class="allChecked?'check':''">
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                  </span>
                  <span>全选</span>
                            </a>
                        </div>
                    </div>
                    <div class="cart-foot-r">
                        <div class="item-total">
                            总计: <span class="total-price">{{sum}}</span>
                        </div>
                        <div class="btn-wrap">
                            <a href="#/address" class="btn btn--red">结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import NavBread from "@/components/NavBread"
import NumCounter from "@/components/NumCounter"


// 引入中间人
import bus from "@/bus"

export default {
  name: 'Cart',   // 组件名
  components: {
      NavBread,
      NumCounter
  },
  
  destroyed() {
    //   alert("销毁了")
  },

  created() {

    var self = this;

    // 流程
    //  1. 判断是否登录
    //      登录
    //           获取数据
    //      未登录
    //           弹出登录对话框
    self.loadData();

    // 监听登陆成功的事件
    bus.$on("loginOK", function() {
        
        self.loadData();
    })
  },

  data() {
      return {
          cartList: []
      }
  },
  computed: {

      allChecked: function() {
          var flag = true
          // 判断是否全部选中
          for (var i = 0; i < this.cartList.length; i++) {
              var item = this.cartList[i]
              if (item.checked == false) {
                  flag = false;    // 说明至少存在1个没勾选
                  break;
              }
          }
          return flag;    // 返回计算属性的结果
      },

      sum: function() {
          var s = 0;
          for (var i = 0; i < this.cartList.length; i++) {
              
              var item = this.cartList[i]

              if (item.checked) { // 如果商品已经勾选了，那么加上这个价钱
                s += (this.cartList[i].salePrice * this.cartList[i].productNum)
              }  
          }
          return s
      }
  },
  methods: {

      checkAll() {
        //   1. 先获取全选的状态
        var state = this.allChecked

        //  2. 状态反转
        state = !state


        // 3. 所有item都设成 state状态
        for (var i = 0; i < this.cartList.length; i++) {
            var item = this.cartList[i]

            item.checked = state
        }
      },
      
      checkItem(i) {
          var item = this.cartList[i]

          // 状态翻转
        //     true ===> fasle
        //     false ==> true
          item.checked = !item.checked
      },

      delItem(i) {

        // 获取删除商品的ID
        var productId = this.cartList[i].productId

        // 发送删除购物车请求
        this.axios.post("/api/users/cartDel", {
            // productId: productId    // 传给服务器的参数，商品ID
            productId    // 传给服务器的参数，商品ID 
        }).then( (res) => {
            // console.log( res )
            var data = res.data;
            if (data.status == "0") {
                // 说明删除成功

                // 所有商品 this.cartList 数组中
                //    删除数组中下标为 i 的元素的方法
                //                 删除位置   个数
                this.cartList.splice(i, 1)

                // 更新购物车数量
                this.$store.commit("update", this.cartList.length)
            }
        })

        


      },

      loadData() { // 加载数据
        this.axios.get("/api/users/cartList")
            .then((res) => {
                // console.log(res)
                this.cartList = res.data.result
            
                this.$store.commit("update", this.cartList.length)
            })
      },
      jia(i) {
        //  i 代表当前点击的下标
        // this.cartList[i].productNum++

        var item = this.cartList[i]

        this.axios.post("/api/users/cartEdit", {
            productId: item.productId,
            checked: item.checked,
            productNum: parseInt(item.productNum) + 1  //需要再原本基础上加1
        }).then ( (res) => {
            if (res.data.status == "0") {
                // 修改成功，更新数量
                item.productNum++;
            }
        })


      },
      jian(i) {
          if (this.cartList[i].productNum <= 0) {
              return ; // 不能再减了
          }

          var item = this.cartList[i];

        this.axios.post("/api/users/cartEdit", {
            productId: item.productId,
            checked: item.checked,
            productNum: parseInt(item.productNum) - 1 
        }).then ( (res) => {
            if (res.data.status == "0") {
                // 修改成功，更新数量
                item.productNum--;
            }
        })
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
