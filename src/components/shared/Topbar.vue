<template>
    <v-app-bar app elevation="0" color="white" class="topbar">
        <div class="topbar-left">
            <v-btn icon="mdi-menu"></v-btn>
            <Search />
        </div>
        <template v-slot:append>
            <div class="topbar-right">
                <v-icon icon="mdi-heart-outline"></v-icon>
                <v-menu open-on-hover open-on-click transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-icon icon="mdi-cart-outline" v-bind="props"></v-icon>
                    </template>
    
                    <CartCard />
                </v-menu>
                <v-menu open-on-hover open-on-click transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-icon icon="mdi-account-outline" v-bind="props"></v-icon>
                    </template>
    
                    <UserCard />
                </v-menu>
            </div>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
import Search from './Search.vue';
import UserCard from '@/components/card/UserCard.vue';
import CartCard from '@/components/card/CartCard.vue'

</script>

<style scoped>
.topbar {
    height: 80px;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    justify-content: center;
}

.topbar-left {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0px 20px
}
.topbar-right {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0px 20px
}

.mdi {
    cursor: pointer;
}

</style>