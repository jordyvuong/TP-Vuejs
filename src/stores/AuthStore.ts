import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const user = ref<{ email: string } | null>(null);
    const cart = ref<{ name: string; price: number }[]>([]);

    const isAuthenticated = computed(() => !!user.value);

    const login = (email: string) => {
        user.value = { email };
    };

    const logout = () => {
        user.value = null;
        cart.value = [];
        location.reload();

    };
    return { user, isAuthenticated, login, logout, cart };
});
