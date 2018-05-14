<template>
  <div class="single container">
    <div class=" row">
      
      <div class="col-md-6">
          <img :src="`${imgUrl}${items[singleCount].picB}`" alt="">
        </div>
      <div class="col-md-6 single-right">
        <h2>{{items[singleCount].name}}</h2>
        <h3>NT${{items[singleCount].price}}</h3>
        <ul>
          <li>數量</li>
          <li><div class="addCount">
        <span @click="decrement()" class="add-btn">-</span><span class="add-btn count">{{this.num}}</span><span class="add-btn " @click="increment()">+</span>
        </div></li>
        <li>
          <button class="add-to-cart" @click="addCart(items)"><span>加入購物車</span></button>
        </li>
        <li><h3>  送貨方式</h3></li>
        <li><h3>  付款方式</h3></li>
        </ul>
      </div>
      <div class="col-md-12 product-info">
        <h3>商品資訊</h3>
        <div>{{items[singleCount].describe}}</div>
      </div>
    </div>
    
    
    
    
  </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
    export default {
  name: 'single-product',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: 'http://a.ecimg.tw',
      num: 1
    }
  },
  computed: {
    ...mapGetters({'items': 'getProducts','singleCount': 'getItemsCount'})
  },
  methods: {
    addCart(items){
      console.log(items[this.$store.state.productsCount])
      this.$store.commit('addCart',{item: this.items[this.$store.state.productsCount], num: parseInt(this.num)})
    },
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
<style lang="scss">
$border :1px solid #ded9d9;
$radius: 15px;

.single {
  margin: 50px auto;
  text-align: left ;
  .single-right {
    background: #fff;
    border:$border;
    padding: 20px 35px;
    border-radius: $radius
  }
  @media (max-width: 767px) {
    
    .single-right {width: 95%;margin: 30px auto;padding: 20px ;}
  }
  h2 {font-size: 1.5em;margin: 20px 0px}
  h3 {font-size: 1.2em;margin: 20px 0px}
  img {
    width: 100%;
  }
   .addCount {
    width: 200px;
    margin: 10px 0px;
    text-align: center;
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
  .add-to-cart {
    width: 200px;
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
  .product-info {
    padding: 30px
  }
}
</style>
