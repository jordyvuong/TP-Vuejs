<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <NavBar />
        <h1 class="text-4xl font-bold text-gray-900">HomeMade</h1>
        <p class="text-lg text-gray-700 mt-2">Découvrez les plats préparés par nos cuisiniers.</p>
        <div v-if="!isAuthenticated" class="flex gap-4 mt-6">
            <router-link to="/register" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">S'inscrire</router-link>
            <router-link to="/login" class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Se connecter</router-link>
        </div>
            <router-link to="/chefs" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-6">Voir les cuisiniers</router-link>
    </main>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import { useAuthStore } from '../stores/AuthStore';

const authStore = useAuthStore();
const isAuthenticated = authStore.isAuthenticated;
</script>

<style>
</style>
