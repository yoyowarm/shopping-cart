import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import carts from '@/components/carts'
import item from '@/components/single-product'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'product',
            component: product
        },
        {
            path: '/cart',
            name: 'cart',
            component: carts
        },
        {
            path: '/:serch',
            name: 'serchItem',
            component: product
        },
        {
            path: '/:id',
            name: 'item',
            component: item
        }
    ]
})