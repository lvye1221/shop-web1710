<template>
  <div class="hello">


      <!-- 使用导航组件 -->
    <nav-bread>
        热门商品
    </nav-bread>

    <div class="accessory-result-page accessory-page">
        <div class="container">
            <div class="filter-nav">
                <span class="sortby">Sort by:</span>
                <a href="javascript:void(0)" class="default cur">Default</a>
                <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
            </div>
            <div class="accessory-result">
                <!-- filter -->
                <div class="filter stopPop" id="filter">
                    <dl class="filter-price">
                        <dt>Price:</dt>
                        <dd><a href="javascript:void(0)">All</a></dd>
                        <dd>
                            <a href="javascript:void(0)">0 - 100</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">100 - 500</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">500 - 1000</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">1000 - 2000</a>
                        </dd>
                    </dl>
                </div>

                <!-- search result accessories list -->
                <div class="accessory-list-wrap">
                    <div class="accessory-list col-4">
                        <ul>
                            <li v-for="good in goodsList">
                                <div class="pic">
                                    <a href="#">
                                      <!-- <img src="/static/img/1.jpg" alt=""> -->
                                      <!-- <img src="/static/img/1.jpg" alt=""> -->
                                        <img v-bind:src="'/static/img/' + good.productImage" alt="">
                                    </a>
                                </div>
                                <div class="main">
                                    <div class="name">{{good.productName}}</div>
                                    <div class="price">{{good.salePrice | money}}</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m" v-on:click="addCart(good.productId)">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <!-- <li>
                                <div class="pic">
                                    <a href="#"><img src="/static/img/2.jpg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">1000</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="#"><img src="/static/img/3.jpg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">500</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="#"><img src="/static/img/4.jpg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">2499</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


  </div>
</template>

<script>
import NavBread from "@/components/NavBread"
export default {
  name: 'ProjectList',   // 组件名
//   data: function() {

//   }
  data() {     // ES6中代表定义1个简单的函数
    return {
        goodsList: []             // 商品数据
    }
  },
  mounted() {     // 挂载后请求数据
    // alert("主页商品列表中：商品数量" + this.$store.state.num)

    // this.axios 刚引入请求数据的模块
    //  请求模拟数据

    // var self = this;

    // this.axios.get("/static/mock/mock-goods.json")
    //     .then(function(res) {
    //         // console.log(res)
    //         self.goodsList = res.data.data
    //     })

    this.axios.get("/static/mock/mock-goods.json")
        .then( (res) => {
            // ES6 中箭头函数，不会改变 this 的指向
            this.goodsList = res.data.data
        })
  },
  components: {
      NavBread
  },
  methods: {
      addCart: function(productId) {

        //   alert(productId)

        this.axios.post("/api/goods/addCart", {
            productId: productId
        }).then( (res) => {
            var data = res.data
            if (data.status == "0") {                
                // 让状态管理器中 购物车数量 增1
                //    执行 add 状态
                this.$store.commit("add")
            }
        })


      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
