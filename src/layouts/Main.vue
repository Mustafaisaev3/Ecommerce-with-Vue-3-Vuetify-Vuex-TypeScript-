<template >
    <div class="main">
        <router-view />
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';

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