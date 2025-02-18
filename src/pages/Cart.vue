<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <NavBar />
        <h1 class="text-3xl font-bold text-gray-900">Votre Panier</h1>
        <div v-if="cart && cart.length > 0" class="mt-6 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
            <ul>
                <li v-for="(item, index) in cart" :key="index" class="flex justify-between items-center py-2 border-b">
                    <span>{{ item.name }} - {{ item.price }}€</span>
                    <button @click="removeFromCart(index)" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Retirer</button>
                </li>
            </ul>
            <div class="mt-4 text-lg font-semibold">Total : {{ totalPrice }}€</div>
            <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Commander</button>
        </div>
        <p v-else class="mt-6 text-gray-700">Votre panier est vide.</p>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';
import NavBar from '../components/NavBar.vue';

const cartStore = useCartStore();
const cart = computed(() => cartStore.cart);
const totalPrice = computed(() => cartStore.totalPrice);

const removeFromCart = (index: number) => {
    cartStore.removeFromCart(index);
};

</script>

<style>
</style>
