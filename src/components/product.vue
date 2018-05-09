<template  >
  <div class="hello row" >
    <div class="col-4" v-for="(item,index) in items" >
        <router-link tag="div" :to="{name:'item',params:{id:item.Id}}" @click.native="findIndex({index:index})">
        <img :src="`${imgUrl}${item.picS}`" alt="">
        </router-link>
        <p >{{ item.name }}</p>
        <p>{{item.price}}</p>
        <!-- <p>{{productsCount}}</p> -->
        <button @click="decrement()">-</button>
        <input type="number" :value="item.num" >
        <button @click="increment()">+</button>
        
        <button @click="addCart(item)"><span>加入購物車</span></button>
        
    </div>
   

    
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: 'http://a.ecimg.tw',
      // num: 0
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
      this.$store.commit('addCart',{item: item,num:this.$store.state.productsCount})
    },
    ...mapMutations({
      'findIndex': 'setSingleCount',
  
    }),
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
</style>
