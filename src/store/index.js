import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    edit: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertEdit (state, payload) {
      state.edit = payload.product
      console.log(state.edit.name)
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
          this.dispatch('goHome')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    signout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('id')
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
          this.dispatch('fetchProducts')
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
    },
    editProduct (context, payload) {
      axios({
        method: 'get',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertEdit', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'put',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.editName,
          category: payload.editCategory,
          stock: payload.editStock,
          price: payload.editPrice,
          image: payload.editImage
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
