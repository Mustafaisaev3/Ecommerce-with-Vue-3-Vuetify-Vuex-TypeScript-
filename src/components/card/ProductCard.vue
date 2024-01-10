<template lang="">
    <v-card 
        class="product-card mx-auto"
        max-width="344"
        variant="outlined"
    >
        <div class="product-card__image">
            <a href="#">
                <img :src="product.image" alt="">
            </a>
        </div>

        <div class="product-card__detail">
            <a href="#">
                <h6 class="product-card__title">{{ product.title }}</h6>
            </a>
            <h6 class="product-card__size">{{ product.size }}</h6>
            <div class="product-card__bottom">
                <div class="product-card__price">$ {{ product.price }}</div>
                <div class="product-card__icon">
                    <v-icon icon="mdi-plus" size="x-small" color="primary"></v-icon>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ProductType } from '@/data/products';
import { computed } from 'vue';

const { product } = defineProps({
    product: Object as PropType<ProductType>
})

</script>

<style scoped lang="scss">
.product-card {
    background: white;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 15px;
    padding: 10px 15px;
    transition: all 0.5s;

    &:hover {
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }

    a {
        text-decoration: none;
    }

    &__bottom {
        width: 100%;
        height: auto;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .product-card__price {
            font-size: 18px;
            color: #6262a6;
        }

        .product-card__icon {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
        }
    }

}

.product-card__image {
        width: 100%;
        height: 140px;
        padding: 20px 0;

        & a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & img {
            width: auto;
            object-fit: cover;
            height: 100%;
            transition: all 0.5s;
        }

        .product-card:hover & img {
            transform: scale(1.1);
        }
    }

.product-card__detail {
    & .product-card__title {
        font-size: 14px;
        color: #222;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    & .product-card__size {
        font-size: 14px;
        font-weight: 400;
        color: #2b2b2b;
    }
}
</style>