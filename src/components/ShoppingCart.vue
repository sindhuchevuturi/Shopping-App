<template>
  <div>
    <h2>Shopping Cart</h2>
    <ul class="cart-list">
      <li v-for="(item, index) in cart" :key="item.name">
        {{ item.quantity }} - {{ item.name }} - {{ item.price }}
        <button @click="removeFromCart(index)">Remove from Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: Array,
  },
  methods: {
    removeFromCart(index) {
      // Emit an event to notify the parent component about the removal
      this.$emit('remove-from-cart', index);
    },
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.cart-list {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
}

.cart-list li {
  margin-bottom: 10px; /* Add some spacing between items */
}
</style>
