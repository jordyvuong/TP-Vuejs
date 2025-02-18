<template>
    <div class="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
        <img :src="props.image" alt="Chef photo" class="w-36 h-36 object-cover rounded-full">
        <div class="mt-2">
            <h3 class="text-lg font-bold">{{ props.name }}</h3>
            <p class="text-gray-600">{{ props.specialty }}</p>
        </div>
        <div class="mt-4">
            <router-link :to="props.detailsLink" class="text-blue-500 hover:underline">Voir détails</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  name: string;
  specialty: string;
  image: string;
  detailsLink: string;
}>();

</script>

<style scoped>
</style>
