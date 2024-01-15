<!-- src/components/AppHeader.vue -->
<template>
  <header>
     <h1> Aviva Tasman Food Stamp Program </h1>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AppHeader',
  props: {
    cart: Array,
  },
  setup(props) {
    const route = useRoute();
    const isShoppingCartRoute = computed(() => route.path.includes('/cart'));

    const cartItemsCount = computed(() => {
      return props.cart.reduce((total, item) => total + item.quantity, 0);
    });

    return { cartItemsCount, isShoppingCartRoute };
  },
};
</script>

<style scoped>
/* Your styles for the header go here */
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: navy; /* Navy blue background color */
  color: white; /* Text color */
  padding: 10px;
  margin-bottom: 20px; /* Add margin if needed */
}
</style>
