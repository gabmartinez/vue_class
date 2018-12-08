<template>
  <div id="app">
    <HelloWorld title="Welcome to my Application"/>
    <table id="my-table">
      <tr>
        <th>Titulo</th>
        <th>Precio</th>
        <th>Color</th>
      </tr>
      <Product v-for="product in products" :key="product.id" :title="product.title" :price="product.price" :color="product.color"/>
    </table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Product from './components/Product.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Product
  },
  data() {
    return {
      products: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/').then(response => (this.products = response.data.products))
  }
}
</script>

<style>

#my-table {
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
