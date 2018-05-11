<template>
  <div class="cart container">
      <ul class="row cart-head">
          <li class="col-12 ">購物車 ({{cartlength}}) 件</li>
      </ul>
      <ul class="row d-none d-sm-flex items-head" v-if="cartlength">
          <li class="col-sm-1"></li>
          <li class="col-sm-2">商品資料</li>
          <li class="col-sm-2">單件價格</li>
          <li class="col-sm-3">數量</li>
          <li class="col-sm-2">小記</li>
          <li class="col-sm-2"></li>
      </ul>
      <ul class="row items-list" v-for="(item,index) in cartsItem" >
          <li class="col-sm-1"><img :src="`${imgUrl}${item.item.picS}`" alt=""></li>
          <li class="col-sm-2">{{item.item.name}}</li>
          <li class="col-sm-2 money"><span class="d-inline d-sm-none">單件價格：</span>NT${{item.item.price}}</li>
          <li class="col-sm-3">
              <span @click="decrement(index)" class="add-btn">-</span><span class="add-btn count">{{item.num}}</span><span class="add-btn " @click="increment(index)">+</span>
        </li>
          <li class="col-sm-2 money"><span class="d-inline d-sm-none">小記：</span>NT${{item.item.price * item.num}}</li>
          <li class="col-sm-2"><span class="remove" @click="removeCart(index)">移除</span></li>
      </ul>
        <div class="money" v-if="cartlength">NT${{totalPrice}}</div>
        <div v-else>你的購物車是空的，到商城加入商品到你的購物車吧</div>
      
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
    export default {
        name: 'cart',
        data(){
            return {
                imgUrl: 'http://a.ecimg.tw',
            } 
        },
        computed:{
            ...mapGetters({
                'cartsItem' : 'getCarts',
                'totalPrice': 'getTotalPriceCarts',
                'cartlength': 'getCartsCount'
            })
        },
        methods: {
            increment(index){
            this.$store.commit('increment',index)
            },
            decrement(index){
            this.$store.commit('decrement',index)
            },
            ...mapMutations({
                'removeCart': 'removeCart'
            })
        }
    }
</script>
<style lang="scss">
$border :1px solid #ded9d9;
.container {width: 90%}
input[type="number"]{
    width: 60px;
    height: 30px;
}
.cart {
    margin: 0 auto;
    font-size: 0.9em;
    ul {margin-bottom: -1px}
    .money {
        font-family: monospace;
        font-size: 16px;
        letter-spacing: -1px
    }
    .cart-head {
        background: #F6F6F6;
        text-align: left;
        border: $border;
        margin-top:50px;
        li {
            padding: 10px;
            font-size: 18px;
            font-weight: 500
        }
    }
    .items-head {
        line-height: 40px;
        background: #fff;
        border: $border
    }
    .items-list {
        background: #fff;
        border: $border;
        img {
            width: 65px;
        }
        @media (max-width: 575px) {
            img {width: 65%}
        }
        li {
            padding: 10px
        }
        .add-btn {
            padding: 0px 10px;
            max-height: 30px;
            border: 1px solid #ddd;
            font-size: 20px;
            font-weight: 400;
            vertical-align: bottom;
            margin-left: -1px;
            background: #fff
        }
        .count {
            padding : 0px 30px;
            margin-left: -1px
        }
    }
    .remove {
        color: #007bff;
        cursor: pointer;
        font-size: 14px
    }
}
</style>
