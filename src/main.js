import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import AppHeader from '@/components/AppHeader.vue';

// Home component definition
const Home = {
  template: '<div><AppHeader/><h2>Home Content</h2></div>',
};

const routes = [
  { path: '/', component: Home },
  { path: '/product-list', component: ProductList },
  { path: '/shopping-cart', component: ShoppingCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

// Register components globally
app.component('ProductList', ProductList);
app.component('ShoppingCart', ShoppingCart);
app.component('AppHeader', AppHeader);

// Mount the app with the router
app.use(router);
app.mount('#app');