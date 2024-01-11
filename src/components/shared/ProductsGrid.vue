<template>
    <v-container class="products-grid-container">
        <Heading 
          :title="title" 
          :subtitle="subtitle" 
        />
        <div class="products-grid">
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import ProductCard from '../card/ProductCard.vue';
import Heading from './Heading.vue';
import { ProductType } from '@/data/products'

const { title, subtitle, products} = defineProps({
  title: String,
  subtitle: String,
  products: Array as PropType<Array<ProductType>>
})

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