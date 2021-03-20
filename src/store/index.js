import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    insertProducts (state, payload) {
      console.log(payload)
      state.products = payload
      console.log(state.products)
    }
  },
  actions: {
    signin (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signout () {
      localStorage.removeItem('access_token')
      router.push('/signin')
    },
    goHome () {
      router.push('/')
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          category: payload.category,
          stock: payload.stock,
          price: payload.price,
          image: payload.image
        }
      })
        .then(({ data }) => {
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProducts', data.product)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'delete',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          this.dispatch('fetchProducts')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
