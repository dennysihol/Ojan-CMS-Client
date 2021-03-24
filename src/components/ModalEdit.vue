<template>
  <div>
    <b-modal id="modal-edit" title="Edit Product" hide-footer>
      <form @submit.prevent="updateProduct(edit.id)">
        <label for="name">Name</label><br>
        <input type="text" v-model="edit.name"><br>
        <label for="category">Category</label><br>
        <select id="category" v-model="edit.category">
          <option selected disabled>Choose Category</option>
          <option value="Dry Cake">Dry Cake</option>
          <option value="Wet Cake">Wet Cake</option>
          <option value="Snack">Snack</option>
        </select><br>
        <label for="category">Stock</label><br>
        <input type="text" v-model="edit.stock"><br>
        <label for="category">Price</label><br>
        <input type="text" v-model="edit.price"><br>
        <label for="category">Image</label><br>
        <input type="text" v-model="edit.image"><br><br>
        <b-button variant="outline-primary" type="submit">Button</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ModalEdit',
  methods: {
    updateProduct (id) {
      const editedProduct = {
        id: id,
        editName: this.edit.name,
        editCategory: this.edit.category,
        editStock: this.edit.stock,
        editPrice: this.edit.price,
        editImage: this.edit.image
      }
      this.$store.dispatch('updateProduct', editedProduct)
      this.$bvModal.hide('modal-edit')
    }
  },
  computed: {
    ...mapState(['edit'])
  }
}
</script>

<style>

</style>
