<template>
  <div id="app">
    <nav class="menu ">
        <ul class="row space-around">
          <!-- <li class="col"><img src="./assets/apple.svg" alt=""></li> -->
          <router-link class="" to='/' tag="li" @click.native="index()"><img src="./assets/apple.svg" alt=""></router-link>
          <router-link :to="{name:'serchItem',params:{serch:menuList[index]}}" tag="li" v-for="(list,index) in menuList" @click.native="changeItem({index:index})" :key="index">{{menuList[index]}}</router-link>
          <!-- <li class="" v-for="(list,index) in menuList" @click="changeItem({index:index})">{{menuList[index]}}</li>   -->
          <router-link class="cartBlock" to='/cart' tag="li"><img src="./assets/bag.svg" alt="">
            <span v-show="CartsCount" :class="{haveItem:CartsCount}"></span>
          </router-link>
          <!-- <li class="col"><img src="./assets/bag.svg" alt=""></li>  -->
      </ul>
    </nav>
    <!-- <p>{{ count }}</p> -->
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button> -->
    <router-view ></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState,mapGetters ,mapActions} from 'vuex'
export default {
  name: 'App',

  data(){
return {
  // count: this.$store.state.count,
  msg : '',
  posts: []
}
  },
  computed:{
    ...mapState({menuList: state => state.menu}),
    ...mapGetters({'CartsCount' : 'getCartsCount'})
    
    
  },
  methods:{
  increment(){
    // this.$store.commit('increment')
  },
  decrement(){
    // this.$store.commit('decrement')
  },
  ...mapActions({
    'changeItem': 'changeItme',
   
  }),
  ...mapActions({
     'index' : 'initial'
  })
  },
  created() {
    this.$store.dispatch('initial')
  // this.$store.commit('increment');
 
}
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  width: 100%;
  
  color: #fff;
  background: rgba(0,0,0,0.8);
  ul {
    width: 75%;
    height: 48px;
    margin: 0 auto;
  }
  li {
    line-height: 48px;
    cursor: pointer;
  }
  .space-around {
     justify-content: space-around
  }
  .cartBlock {
    position: relative;
  }
  .haveItem {
    width: 8px;
    height: 8px;
    border-radius:50%;
    background: red;
    position: absolute;
    z-index: 1;
    top: 22px;
    left: 3px;
  }
}
</style>
