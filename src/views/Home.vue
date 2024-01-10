<template>
    <div class="home">
        <MainBanners />
        <ProductsGrid />
        <ProductsGrid />
    </div>
</template>
<script setup lang="ts">
import MainBanners from '@/components/shared/MainBanners.vue';
import ProductsGrid from '@/components/shared/ProductsGrid.vue';

</script>
<style>
.home {
    width: 100%;
    font-size: 30px;
}
</style>