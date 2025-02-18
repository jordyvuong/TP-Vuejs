<template>
  <nav class="bg-blue-500 p-4 text-white flex justify-between items-center shadow-md w-full fixed top-0 left-0">
    <router-link to="/" class="text-xl font-bold">HomeMade</router-link>
    <div class="flex gap-4">
      <router-link to="/chefs" class="hover:underline">Cuisiniers</router-link>
      <router-link to="/cart" class="hover:underline">Panier ({{ itemCount }})</router-link>
      <button v-if="isUserLoggedIn" @click="logout" class="hover:underline">Déconnexion</button>
      <router-link v-else to="/login" class="hover:underline">Connexion</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '../stores/AuthStore';
import { useCartStore } from '../stores/CartStore';

const authStore = useAuthStore();
const isUserLoggedIn = computed(() => authStore.isAuthenticated);
const logout = () => {
  authStore.logout();
};

const cartStore = useCartStore();
const itemCount = computed(() => cartStore.cart.length);
</script>

<style>
</style>
