<template>
  <div class="cart">
      <table  >
          <tr v-for="(item,index) in cartsItem">
              <td><img :src="`${imgUrl}${item.item.picS}`" alt=""></td>
              <td>{{item.item.name}}</td>
              <td>NT${{item.item.price}}</td>
              <td>X{{item.num}}</td>
              <td>單項金額NT${{item.item.price * item.num}}</td>
          </tr>
          <tr>
              <td>總金額</td>
              <td>NT${{totalPrice}}</td>
          </tr>
          
      </table>
      <ul>
          <li > </li>
      </ul>
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
                cartsItem : 'getCarts',
                totalPrice: 'getTotalPriceCarts'
            })
        }
    }
</script>
<style lang="scss">

</style>
