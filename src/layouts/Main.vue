<template >
    <v-app>
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
.main {
    padding-top: 80px;
}
</style>