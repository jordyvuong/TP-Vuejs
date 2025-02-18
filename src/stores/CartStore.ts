import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cart = ref<{ name: string; price: number }[]>([]);
    const currentUserEmail = ref('');

    const totalPrice = computed(() => cart.value.reduce((sum, item) => sum + item.price, 0));

    const addToCart = (item: { name: string; price: number }) => {
        cart.value.push(item);
    };

    const removeFromCart = (index: number) => {
        cart.value.splice(index, 1);
    };

    return { cart, totalPrice, addToCart, removeFromCart, currentUserEmail };
});
