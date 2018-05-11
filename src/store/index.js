import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const state = {
    itemsCount: 0,
    productsCount: 1,
    products: [],
    menu: ['Mac', 'iPhone', 'iPad', 'Watch', 'TV'],
    carts: []
}
const getters = {
    getProducts(state) {
        console.log(state.products)
        return state.products
    },
    getItemsCount(state) {
        console.log(state.itemsCount)
            // console.log(state.products[state.itemsCount])
        return state.itemsCount
    },
    getProductsCount(state) {
        return state.productsCount
    },
    getCarts(state) {
        console.log(state.carts)
        return state.carts
    },
    getCartsCount(state) {
        return state.carts.length
    },
    getTotalPriceCarts(state) {
        const carts = state.carts
        return carts.reduce((totalPrice, item) => {
            totalPrice += item.num * item.item.price
            return totalPrice
        }, 0)
    }

}

const mutations = {
    increment(state, payload) {
        state.carts[payload].num++
            // state.products[state.itemsCount].oder++;

            // 
            // if (payload != undefined) {
            //     state.carts[payload].oder++;
            //     console.log(payload)
            //         // console.log(state.carts[payload].oder)
            // }


            // console.log(state.products[state.itemsCount].oder)
    },
    decrement(state, payload) {
        if (state.carts[payload].num <= 1) {
            return state.carts[payload].num === 1
        }
        state.carts[payload].num--
            // if (payload === undefined) {
            //     state.products[state.itemsCount].oder--;
            // }
            // // 
            // if (payload != undefined) {
            //     state.carts[payload].oder--;
            //     console.log(payload)
            //         // console.log(state.carts[payload].oder)
            // }

            // console.log(state.products[state.itemsCount].oder)
    },
    setProducts(state, payload) {
        // payload.prods.map(item => {
        //         Vue.set(item, 'oder', 1)
        //             // console.log(item)
        //     })
        // Vue.set(payload.prods, 'num', 0)
        state.products = payload.prods
            // console.log(state.products)
    },
    setSingleCount(state, payload) {
        // console.log(payload)
        state.itemsCount = payload.index
    },
    addCart(state, payload) {
        if (payload.num > 0) {
            state.carts.push(payload)
        }
        console.log(state.carts)
    },
    removeCart(state, payload) {
        console.log(payload)
        state.carts.splice(payload, 1)
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})