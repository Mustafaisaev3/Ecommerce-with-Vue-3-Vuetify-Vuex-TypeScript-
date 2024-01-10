<template >
    <v-app class="main-app">
        <Sidebar />
        <Topbar />
        <v-main class="main">
            <router-view />
        </v-main>
    </v-app>
</template>
<script setup lang="ts">
import Sidebar from '@/components/shared/Sidebar.vue';
import Topbar from '@/components/shared/Topbar.vue';

</script>
<style>
.main-app {
    background: linear-gradient(149.8deg, #f8f8fb 17.21%, #f3f5f9 79.21%);
}
.main {
    padding-top: 80px;
}
</style>