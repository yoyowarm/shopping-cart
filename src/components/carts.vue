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
      <div class="row" v-if="cartlength">
        <ul class="col-md-4 offset-md-8" >
            <li class=" orders-head">訂單資訊</li>
            <li class="oders-body">
                <ul class="oders-item">
                    <li class="row">
                        <div class="col-6 text-left">小記</div>
                        <div class="col-6 text-right money"> NT${{totalPrice}}</div>
                    </li>
                    <li class="row">
                        <div class="col-6 text-left">運費</div>
                        <div class="col-6 text-right money"> NT$0</div>
                    </li>
                   
                    <li class="row totalPrice">
                        <div class="col-6 text-left">合計</div>
                        <div class="col-6 text-right money">NT${{totalPrice}}</div>
                    </li>
                    <li class="row">
                        <div class="col-12"><button class="checkout">前往結帳</button></div>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
        
        <div v-else class="shopping-cart-empty"><i class="fas fa-shopping-basket"></i><h4>您的購物車是空的</h4>記得加入商品到你的購物車吧</div>
      
  </div>
</template>
<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
import fontawesome from '@fortawesome/fontawesome'
import faShoppingBasket from '@fortawesome/fontawesome-free-solid/faShoppingBasket'
fontawesome.library.add(faShoppingBasket)
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
    .shopping-cart-empty {
        width: 550px;
        max-width: 100%;
        margin: 50px auto
    }
    .fa-shopping-basket {
        font-size: 120px;
        color: #ccc;
        display: block;
        margin: 0 auto;
        padding: 10px 0px
    }
    .orders-head {
        @extend .cart-head;
         padding: 10px;
        font-size: 18px;
        font-weight: 500
    }
    .oders-body {
        padding:10px;
        background: #fff;
        border: $border;
        margin-top: -1px
    }
    .oders-item {
        li {
            margin: 15px auto
        }
    }
    .totalPrice {
        margin-top: 20px;
        border-top: $border;
        padding :15px 0px;
        font-weight: 600;
    }
    .checkout {
        width: 100%;
        padding: 10px;
        border: 0px;
        border-radius: 10px;
        background: #007bff;
        color: #fff;
        font-size: 18px
    }
}
</style>
