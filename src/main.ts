import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue'
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import '/src/style.css';
import Chefs from './pages/Chefs.vue';
import ChefDetails from './pages/ChefDetails.vue';
import Cart from './pages/Cart.vue';
import Register from './pages/Register.vue';
import NavBar from './components/NavBar.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: '', 
        component: Home 
    },
    { 
        path: '/login', 
        component: Login 
    },
    { 
        path: '/register', 
        component: Register 
    },
    {
        path: '/chefs',
        component: Chefs
    },
    {
        path: '/chefs/:id',
        component: ChefDetails    
    },
    {
        path: '/cart',
        component: Cart    
    },
    {
        path: '/:id',
        component: Home
    }
  ],
});

createApp(App).use(router).use(createPinia()).component('Navbar', NavBar).mount('#app');