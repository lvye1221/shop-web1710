<template>
  <div >
      <div class="select-self select-self-open">
        <div class="select-self-area">
            <a class="input-sub" v-on:click="jian">-</a>
            <span class="select-ipt">{{num}}</span>
            <a class="input-add" v-on:click="jia">+</a>
        </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'NumCounter',
  props: ['num', 'index'],
  methods: {
      // 减
      jian: function() {
        this.$emit("jian", this.index)
      },
      // 加
      jia: function() {
        this.$emit("jia", this.index)
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-sub,
        .input-add {
            min-width: 40px;
            height: 100%;
            border: 0;
            color: #605F5F;
            text-align: center;
            font-size: 16px;
            overflow: hidden;
            display: inline-block;
            background: #f0f0f0;
        }
        
        .item-quantity .select-self-area {
            background: none;
            border: 1px solid #f0f0f0;
        }
        
        .item-quantity .select-self-area .select-ipt {
            display: inline-block;
            padding: 0 3px;
            width: 30px;
            min-width: 30px;
            text-align: center;
        }
</style>
