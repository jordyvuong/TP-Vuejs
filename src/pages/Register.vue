<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Navbar />
        <h1 class="text-3xl font-bold text-gray-900">Inscription</h1>
        <form @submit.prevent="handleSignup" class="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <label for="email" class="block text-gray-700">Email :</label>
            <input 
            type="email" 
            id="email" 
            v-model="email" 
            required 
            class="w-full p-2 border border-gray-300 rounded mt-1 mb-4" 
            />
            
            <label for="password" class="block text-gray-700">Mot de passe :</label>
            <input 
            type="password" 
            id="password" 
            v-model="password" 
            required 
            class="w-full p-2 border border-gray-300 rounded mt-1 mb-4" 
            />
            
            <label for="confirmPassword" class="block text-gray-700">Confirmer le mot de passe :</label>
            <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            required 
            class="w-full p-2 border border-gray-300 rounded mt-1 mb-4" 
            />
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">S'inscrire</button>
        </form>
        <section class="login-section">
                <button @click="goToLogin" class="mt-5 text-blue-500 cursor-pointer hover:underline">Déjà un compte ? Se connecter</button>
            </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/NavBar.vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');


const router = useRouter();
const goToLogin = () => {
    router.push('/login');
};

const handleSignup = () => {
    console.log('Signup form submitted');
};
</script>

<style>
</style>
