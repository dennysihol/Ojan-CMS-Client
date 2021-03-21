<template>
  <div>
    <b-modal id="modal-add" title="Add Product">
      <form @submit="addProduct">
        <label for="name">Name</label><br>
        <input type="text" v-model="nameProduct"><br>
        <label for="category">Category</label><br>
        <select id="category" v-model="category">
          <option selected disabled>Choose Category</option>
          <option value="Dry Cake">Dry Cake</option>
          <option value="Wet Cake">Wet Cake</option>
          <option value="Snack">Snack</option>
        </select><br>
        <label for="category">Stock</label><br>
        <input type="text" v-model="stock"><br>
        <label for="category">Price</label><br>
        <input type="text" v-model="price"><br>
        <label for="category">Image</label><br>
        <input type="text" v-model="image"><br><br>
        <b-button variant="outline-primary" type="submit">Button</b-button>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalAdd',
  data () {
    return {
      nameProduct: '',
      category: '',
      stock: 0,
      price: 0,
      image: ''
    }
  },
  methods: {
    addProduct () {
      const product = {
        name: this.nameProduct,
        category: this.category,
        stock: this.stock,
        price: this.price,
        image: this.image
      }
      this.$store.dispatch('addProduct', product)
    }
  }

}
</script>

<style>

</style>
