<template>
    <div class="home">
        <MainBanners />
        <ProductsGrid :title="'Food Cupboard'" :subtitle="'A virtual assistant collects the products from your list'" :products="Products" />
        <ProductsGrid :title="'Top Rated'" :subtitle="'A virtual assistant collects the Top Rated products'" :products="Products" />
    </div>
</template>
<script setup lang="ts">
import MainBanners from '@/components/shared/MainBanners.vue';
import ProductsGrid from '@/components/shared/ProductsGrid.vue';
import { Products } from '@/data/products';

</script>
<style>
.home {
    width: 100%;
    font-size: 30px;
}
</style>