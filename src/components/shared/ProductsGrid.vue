<template>
    <v-container class="products-grid-container">
        <Heading 
          :title="'Food Cupboard'" 
          :subtitle="'A virtual assistant collects the products from your list'" 
        />
        <div class="products-grid">
          <ProductCard v-for="product in Products" :key="product.id" :product="product"/>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import ProductCard from '../card/ProductCard.vue';
import Heading from './Heading.vue';
import { Products } from '@/data/products'

</script>

<style lang="scss">
.products-grid-container {
  padding-top: 40px;
  max-width: 100%;
  width: 100%;
}

.products-grid {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }

}
</style>