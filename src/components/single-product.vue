<template>
  <div class="single">
    <img :src="`${imgUrl}${items[singleCount].picB}`" alt="">
    <div>{{items[singleCount].name}}</div>
    <p>{{items[singleCount].price}}</p>
    <div>{{items[singleCount].describe}}</div>
  </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
    export default {
  name: 'single-product',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgUrl: 'http://a.ecimg.tw'
    }
  },
  computed: {
    ...mapGetters({'items': 'getProducts','singleCount': 'getItemsCount'})
  }
}
</script>
<style lang="scss">

</style>
