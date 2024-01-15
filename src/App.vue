<template>
  <div id="app">
    <AppHeader :cart="cart" />
    <header>
      <router-link to="/">
        <img alt="tasman_Logo" src="./assets/tasman_logo.png" @click="clearCart" />
      </router-link>
      <h1>The Shopping App</h1>
      <router-link to="/cart">Cart ({{ cartItemsCount }})</router-link>
    </header>
    <nav>
      <!-- Your navigation links go here -->
    </nav>
    <router-view @add-to-cart="addToCart"></router-view>

    <!-- Use the ProductList component here -->
    <ProductList :products="products" @add-to-cart="addToCart" />
    
    <!-- Use the ShoppingCart component here -->
    <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductList from './components/ProductList.vue';
import { ref, computed } from 'vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    ShoppingCart,
    ProductList,
  },
  setup() {
    const cart = ref([]);

    // Add the removeFromCart method
    const removeFromCart = (index) => {
      cart.value.splice(index, 1);
    };

    // Add the clearCart method
    const clearCart = () => {
      cart.value = [];
    };

    const products = ref([
      { id: 1, name: 'Product 1', price: 20 },
      { id: 2, name: 'Product 2', price: 30 },
      // Add more products as needed
    ]);

    const addToCart = (product) => {
      const existingItemIndex = cart.value.findIndex((item) => item.name === product.name);

      if (existingItemIndex !== -1) {
        cart.value[existingItemIndex].quantity++;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
    };

    const cartItemsCount = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0);
    });

    return { cart, addToCart, cartItemsCount, products, removeFromCart, clearCart };
  },
};
</script>

<style>
/* Add global styles here */
#app {
  text-align: center;
  padding: 20px;
}

img {
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
}

router-link {
  margin-right: 50px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

router-link:hover {
  color: #555;
}
</style>
