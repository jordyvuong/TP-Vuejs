<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Navbar />
        <div class="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg ">
            <img :src="chef?.image" alt="Chef photo" class="w-full h-64 object-cover rounded-md mb-4" style="object-position: 50% 35%;">
            <h1 class="text-3xl font-bold text-gray-900">{{ chef?.name }}</h1>
            <p class="text-lg text-gray-700 mt-2">Spécialité : {{ chef?.specialty }}</p>
            <h2 class="text-2xl font-semibold mt-4">Plats proposés</h2>
            <ul class="mt-2">
                <li v-for="dish in chef?.dishes" :key="dish.name" class="text-gray-700 flex justify-between items-center">
                    <span>{{ dish.name }} - {{ dish.price }}€</span>
                    <button @click="addToCart(dish)" class="mt-4 px-2 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">Ajouter au panier</button>
                </li>
            </ul>
            <router-link to="/chefs" class="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Retour</router-link>
        </div>
        <div v-if="showPopup" class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
            Plat bien ajouté au panier !
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/NavBar.vue';
import { useCartStore } from '../stores/CartStore';

const route = useRoute();
const chef = ref<{ id: number; name: string; specialty: string; dishes: { name: string, price: number }[]; image: string } | null>(null);
const showPopup = ref(false);

const chefsData = [
    { id: 1, name: 'Chef Quentin', specialty: 'Cuisine Française', dishes: [
        { name: 'Boeuf Bourguignon', price: 15 },
        { name: 'Ratatouille', price: 10 }
    ], image: 'https://media.licdn.com/dms/image/v2/D4E35AQEXU5NGG_CqeQ/profile-framedphoto-shrink_800_800/B4EZUUXG0gHMAg-/0/1739803356813?e=1740499200&v=beta&t=XY6cxQRUw3-tLt4zkhORT18Td4tqjWtnwnPojWep-x8' },
    { id: 2, name: 'Chef Anthony', specialty: 'Cuisine Asiatique', dishes: [
        { name: 'Soupe Phô', price: 12 },
        { name: 'Loc lac', price: 14 }
    ], image: 'https://media.licdn.com/dms/image/v2/D4D35AQHQQ9rmvD7WEA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738860926923?e=1740499200&v=beta&t=FmsuJD0xPeVdj_PEl9PrREbCPnsBnMVkxp05yA4pdsk' },
    { id: 3, name: 'Chef Johan', specialty: 'Cuisine Espagnol', dishes: [
        { name: 'Paella', price: 18 },
        { name: 'Tortilla española', price: 9 }
    ], image: 'https://media.licdn.com/dms/image/v2/D4E03AQEHYVf2BTOkGA/profile-displayphoto-shrink_800_800/B4EZS5dH62HcAc-/0/1738278207813?e=1745452800&v=beta&t=zDBr3Lkq3gTVfL9xrteLgkfD3dcA18RzaaTZ5nsYbpY' }
];

const cartStore = useCartStore();

const addToCart = (dish: { name: string, price: number }) => {
    cartStore.addToCart(dish);
    showPopup.value = true;
    setTimeout(() => {
        showPopup.value = false;
    }, 2000);
};

onMounted(() => {
    const chefId = Number(route.params.id);
    chef.value = chefsData.find(c => c.id === chefId) || null;
});
</script>

<style>
</style>