<template>
  <div>

      <!-- 使用导航组件 -->
    <nav-bread>
        购物车
    </nav-bread>

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
                        <li v-for="(item, index) in cartList">
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascipt:;" class="checkbox-btn item-check-btn" 
                                        v-bind:class="item.checked?'check':''" 
                                        v-on:click="item.checked=!item.checked"
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
                                    <a href="javascript:;" class="item-edit-btn">
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
                            <a href="javascipt:;">
                                <span class="checkbox-btn item-check-btn">
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
                            <a class="btn btn--red">结算</a>
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
      sum: function() {
          var s = 0;
          for (var i = 0; i < this.cartList.length; i++) {
              s += (this.cartList[i].salePrice * this.cartList[i].productNum)
          }
          return s
      }
  },
  methods: {
      loadData() { // 加载数据
        this.axios.get("/api/users/cartList")
            .then((res) => {
                // console.log(res)
                this.cartList = res.data.result
            })
      },
      jia(i) {
        //  i 代表当前点击的下标
        this.cartList[i].productNum++

      },
      jian(i) {
          if (this.cartList[i].productNum <= 0) {
              return ; // 不能再减了
          }
        this.cartList[i].productNum--
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
