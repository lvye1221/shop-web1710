<template>
  <div>

      <!-- 使用导航组件 -->
    <nav-bread>
        确认地址
    </nav-bread>

      <div class="container">
        <div class="checkout-addr">
          <div class="page-title-normal">
            <h2 class="page-title-h2"><span>结算</span></h2>
          </div>
          <!-- process step -->
          <div class="check-step">
            <ul>
              <li class="cur"><span>确认</span> 地址</li>
              <li><span>查看你的</span> 订单</li>
              <li><span>支付</span> </li>
              <li><span>订单</span> 信息</li>
            </ul>
          </div>

          <!-- address list -->
          <div class="page-title-normal checkout-title">
            <h2><span>收货地址</span></h2>
          </div>
          <div class="addr-list-wrap">
            <div class="addr-list">
              <ul>
                <li class="check">
                  <dl>
                    <dt>XXX</dt>
                    <dd class="address">五一广场</dd>
                    <dd class="tel">10000000000</dd>
                  </dl>
                  <div class="addr-opration addr-del">
                    <a href="javascript:;" class="addr-del-btn">
                      <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                    </a>
                  </div>
                  <div class="addr-opration addr-set-default">
                    <a href="javascript:;" class="addr-set-default-btn"  ><i>设为默认</i></a>
                  </div>
                  <div class="addr-opration addr-default" >默认地址</div>
                </li>
                <li class="addr-new">
                  <div class="add-new-inner">
                    <i class="icon-add">
                      <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                    </i>
                    <p>添加新的地址</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="shipping-addr-more">
              <a class="addr-more-btn up-down-btn open" href="javascript:;"  >
                更多
                <i class="i-up-down">
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
          </div>

          <!-- shipping method-->
          <div class="page-title-normal checkout-title">
            <h2><span>支付方式</span></h2>
          </div>
          <div class="shipping-method-wrap">
            <div class="shipping-method">
              <ul>
                <li class="check">
                  <div class="name">标准</div>
                  <div class="price">免费</div>
                  <div class="shipping-tips">
                    <p>下订单后，将会在7天之内送达</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="next-btn-wrap">
            <router-link class="btn btn--m btn--red" v-bind:to="{path:'orderConfirm',query:{'addressId':selectedAddrId}}">下一步</router-link>
          </div>
        </div>
      </div>

    <svg-code />
  </div>
</template>

<script>

import NavBread from "@/components/NavBread"
import SvgCode from "@/components/SvgCode"


// 引入中间人
import bus from "@/bus"

export default {
  name: 'Cart',   // 组件名
  components: {
      NavBread,
      SvgCode
  },
  created() {

  },

  data() {
      return {
          cartList: []
      }
  },
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
