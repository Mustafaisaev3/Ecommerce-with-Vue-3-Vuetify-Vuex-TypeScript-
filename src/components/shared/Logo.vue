<template>
    <div class="logo">
        <RouterLink to="/">
            <img 
              :src="require('@/assets/logo.png')" 
              class="w-75"
            />
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped>
</style>