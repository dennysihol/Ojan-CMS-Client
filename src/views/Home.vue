<template>
  <div class="home">
    <Navbar></Navbar>
    <ModalAdd></ModalAdd>
    <ModalEdit></ModalEdit>

    <table class="table for-table" >
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ formatRupiah(product.price) }}</td>
          <td>
            <img :src="product.image" style="height: 100px">
          </td>
          <td>
            <b-button variant="info" @click="editProduct(product.id)" v-b-modal.modal-edit>Edit</b-button>&nbsp;
            <b-button variant="danger" @click="deleteProduct(product.id)">Delete</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ModalAdd from '@/components/ModalAdd.vue'
import ModalEdit from '@/components/ModalEdit.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    ModalAdd,
    ModalEdit
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    formatRupiah (money) {
      return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
      ).format(money)
    },
    editProduct (payload) {
      this.$store.dispatch('editProduct', payload)
      localStorage.setItem('id', payload.id)
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

body {
  background-image: url('https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8518337.jpg');
}

.for-table {
  margin-top: 20px;
  background-color: #e8e8e4;
}

</style>
