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
        console.log(state.products[state.itemsCount])
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
    increment(state) {
        state.productsCount++;
        // console.log(state.productsCount)
    },
    decrement(state) {
        state.productsCount--;
        // console.log(state.productsCount)
    },
    setProducts(state, payload) {
        state.products = payload.prods
    },
    setSingleCount(state, payload) {
        console.log(payload)
        state.itemsCount = payload.index
    },
    addCart(state, payload) {
        if (payload.num > 0) {
            state.carts.push(payload)
        }
        console.log(payload)
        console.log(state.carts)
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})