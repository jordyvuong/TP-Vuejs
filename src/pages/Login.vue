<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <NavBar/>
        <h1 class="text-3xl font-bold text-gray-900">Connexion</h1>
        <form @submit.prevent="submitHandler" class="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <section>
                <article class="mb-4">
                    <label for="email" class="block text-gray-700">Email :</label>
                    <input 
                        v-model="email"
                        id="email"
                        placeholder="Entrez votre email"
                        type="email"
                        class="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </article>
                <article class="mb-4">
                    <label for="password" class="block text-gray-700">Mot de passe :</label>
                    <input
                        v-model="password"
                        id="password"
                        placeholder="Entrez votre mot de passe"
                        type="password"
                        class="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                    />
                </article>
            </section>
            <section class="flex justify-between mt-4">
                <button type="reset" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Annuler</button>
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Se connecter</button>
            </section>
        </form>

        <p @click="goToRegister" class="mt-5 text-blue-500 cursor-pointer hover:underline">Vous n'êtes pas inscrit ? Inscrivez-vous !</p>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/AuthStore';
import { useCartStore } from '../stores/CartStore';
import NavBar from '../components/NavBar.vue';

const router = useRouter();
const authStore = useAuthStore();
const cartStore = useCartStore();

const goToRegister = () => {
    router.push('/register');
};

const email = ref('');
const password = ref('');

const submitHandler = async () => {
    if (!email.value || !password.value) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    try {
        const result = await fetch('users.json');
        const users = await result.json();
        const user = users.find((u: { email: string; password: string }) => u.email === email.value);

        if (!user) {
            alert('Utilisateur non trouvé');
            return;
        }

        if (user.password !== password.value) {
            alert('Mot de passe incorrect');
            return;
        }

        authStore.login(email.value);
        cartStore.currentUserEmail = email.value;
        alert('Connexion réussie');
        router.push('/');
    } catch (error) {
        console.error('Erreur de connexion:', error);
    }
};
</script>

<style>
</style>
