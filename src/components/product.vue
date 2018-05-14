<template  >
<transition name="fade" tag="div" class="row">
  <div class="product col-12 col-sm-6  col-md-4 col-lg-3"  >
    <div class="product-box">
        <router-link tag="div" :to="{name:'item',params:{id:item.Id}}" >
        <img :src="`${imgUrl}${item.picS}`" alt="">
        </router-link>
        <p class="item-name">{{ item.name }}</p>
        <p class="money">NT${{item.price}}</p>
        <!-- <p>{{productsCount}}</p> -->
        <div class="addCount">
        <span @click="decrement()" class="add-btn">-</span><span class="add-btn count">{{this.num}}</span><span class="add-btn " @click="increment()">+</span>
        </div>
        <button class="add-to-cart" @click="addCart(item)"><span>加入購物車</span></button>
      </div>
  </div>
  </transition>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
  props: ['item'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: 'http://a.ecimg.tw',
      num: 1
    }
  },
  computed:{
    ...mapGetters({
      items: 'getProducts',
      getProductsCount: 'getProductsCount'

      })
  },
  methods: {
    addCart(item){
      this.$store.commit('addCart',{item: this.item, num: parseInt(this.num)})
    },
    ...mapMutations({
      'findIndex': 'setSingleCount',
  
    }),
    increment(){
      this.num++
      // this.$store.commit('increment')
    },
    decrement(){
      if(this.num <= 1){
        return this.num === 1
      }
      this.num--;
      
      // this.$store.commit('decrement')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.7s ease-in-out
}
.fade-enter,
.fade-leave {
    opacity: 0
}
.product {
  margin: 15px auto;
  .product-box {
    border: 1px solid #dedede;
    background: #fff;
    padding: 15px 0px;
    border-radius: 15px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 5px 10px 20px #b7b5b5
    }
    img {cursor: pointer}
  }
  
  img {
    width: 100%;
  }
  .item-name {
  // display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 48px;
  margin: 10px auto;
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: 500
  }
  .money {
        font-family: monospace;
        font-size: 16px;
        letter-spacing: -1px
    }
  .add-to-cart {
    width: 80%;
    color: #fff;
    border: 0px;
    padding: 6px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background: rgba(0, 0, 0,0.8);
    }
  }
  .addCount {
    width: 80%;
    margin: 10px auto;
    .add-btn {
      display: inline-block;
      padding: 0px 10px;
      width: 20%;
      max-height: 30px;
      border: 1px solid #ddd;
      font-size: 20px;
      font-weight: 400;
      vertical-align: bottom;
      margin-left: -1px;
      background: #f7f7f7;
      cursor: pointer;
      transition: all 0.3s;
      &:hover{
        background: #d8d8d8
      }
      
    }
    .count {
        padding : 0px 30px;
        margin-left: -1px;
        width: 60%;
        cursor: default;
        &:hover{
        background:#f7f7f7;
      }
    }
  }
  

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
}
</style>
