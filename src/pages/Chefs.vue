<template>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Navbar />
        <h1 class="text-3xl font-bold text-gray-900">Nos Cuisiniers</h1>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ChefCard 
                v-for="chef in chefs" 
                :key="chef.id"
                :name="chef.name"
                :specialty="chef.specialty"
                :image="chef.image"
                :detailsLink="`/chefs/${chef.id}`"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '../components/NavBar.vue';
import ChefCard from '../components/ChefCard.vue';

const chefs = ref([
    { id: 1, name: 'Chef Quentin', specialty: 'Cuisine Française', image: 'https://media.licdn.com/dms/image/v2/D4E35AQEXU5NGG_CqeQ/profile-framedphoto-shrink_800_800/B4EZUUXG0gHMAg-/0/1739803356813?e=1740499200&v=beta&t=XY6cxQRUw3-tLt4zkhORT18Td4tqjWtnwnPojWep-x8' },
    { id: 2, name: 'Chef Anthony', specialty: 'Cuisine Asiatique', image: 'https://media.licdn.com/dms/image/v2/D4D35AQHQQ9rmvD7WEA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738860926923?e=1740499200&v=beta&t=FmsuJD0xPeVdj_PEl9PrREbCPnsBnMVkxp05yA4pdsk' },
    { id: 3, name: 'Chef Johan', specialty: 'Cuisine Espagnole', image: 'https://media.licdn.com/dms/image/v2/D4E03AQEHYVf2BTOkGA/profile-displayphoto-shrink_800_800/B4EZS5dH62HcAc-/0/1738278207813?e=1745452800&v=beta&t=zDBr3Lkq3gTVfL9xrteLgkfD3dcA18RzaaTZ5nsYbpY' }
]);
</script>

<style>
</style>
