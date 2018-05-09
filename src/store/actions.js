import axios from 'axios'

const cors = 'https://cors-anywhere.herokuapp.com/'

export default {
    initial({ commit, state }) {
        console.log('initial')
        const currPage = 1
        const q = 'Apple'
        const query = `q=${q}&page=${currPage}`
        axios.get(`${cors}http://ecshweb.pchome.com.tw/search/v3.3/all/results?${query}&sort=rnk/dc`)
            .then(response => {
                commit('setProducts', response.data)

            })
    },
    changeItme({ commit, state }, payload) {
        console.log(this.state.menu[payload.index])
        const currPage = 1
        const q = this.state.menu[payload.index]
        const query = `q=apple%20${q}&page=${currPage}`
        axios.get(`${cors}http://ecshweb.pchome.com.tw/search/v3.3/all/results?${query}&sort=rnk/dc`)
            .then(response => {
                commit('setProducts', response.data)
            })
    }

}