<template>
  <div>
    <h2>Product List</h2>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array,
    addToCart: Function,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Food Package', price: '₱ 3,000' },
        { id: 2, name: 'Food Package 1', price: '₱ 3,310' },
        { id: 3, name: 'Food Package 2', price: '₱ 3,217' },
        { id: 4, name: 'Food Package 3', price: '₱ 3,321' },
        { id: 5, name: 'Food Package 4', price: '₱ 3,597' },
      ],
    };
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.product-list {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
}

.product-list li {
  margin-bottom: 10px; /* Add some spacing between items */
}
</style>