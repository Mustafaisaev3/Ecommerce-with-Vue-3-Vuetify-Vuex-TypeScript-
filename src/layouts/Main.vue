<template >
    <v-app>
        <Sidebar />
        <router-view />
    </v-app>
</template>
<script setup lang="ts">
import Sidebar from '@/components/shared/Sidebar.vue';

</script>
<style>
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center
}
</style>