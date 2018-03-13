<template>
  <div class="hello">
    
    <nav-bread>商品</nav-bread>
    
    <div class="accessory-result-page accessory-page">
        <div class="container">
            <div class="filter-nav">
                <span class="sortby">排序:</span>
                <a href="javascript:void(0)" class="default cur">默认</a>
                <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                <a href="javascript:void(0)" class="filterby stopPop">过滤</a>
            </div>
            <div class="accessory-result">
                <!-- filter -->
                <div class="filter stopPop" id="filter">
                    <dl class="filter-price">
                        <dt>价格:</dt>
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
                            <li v-for="item in goodsList">
                                <div class="pic">
                                    <a href="#">
                                      
                                      <!-- <img src="/static/img/1.jpg" alt=""> -->
                                      <img :src="'/static/img/'+item.productImage" alt="">
                                      </a>
                                </div>
                                <div class="main">
                                    <div class="name">{{item.productName}}</div>
                                    <div class="price">{{item.salePrice}}</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
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


import NavBread from '@/components/NavBread'

export default {
  name: 'ProjectList',
  components: {
      NavBread
  },
  data () {
      return {
          goodsList: []
      }
  },
  created() {
      this.axios.get("/static/mock/goods.json").then((data) => {
        //   console.log(data)
        this.goodsList = data.data.data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
