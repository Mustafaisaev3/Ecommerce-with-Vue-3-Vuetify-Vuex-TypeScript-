<template>
    <v-list-item class="w-100 pa-0">
        <div class="category-item">
            <img :src="menu_item!.image" alt="">
            <a class="category-item__link" :href="menu_item?.link" >
                <h5 class="category-item__title">{{ menu_item?.title }}</h5>
                <span class="category-item__title-line"></span>
            </a>
        </div>
    </v-list-item>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { SidebarItemPropsType } from '@/types'

const { menu_item } = defineProps({
    menu_item: Object as PropType<SidebarItemPropsType>
})
</script>

<style>
.category-item {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: 10px;
}

.category-item img {
    width: 35px;
    height: 35px;
    object-fit: contain;
}

.category-item__title {
    color: #222;
    font-size: 18px;
    font-weight: 400;
    transition: all 0.3s;
}

.category-item__link {
    display: flex;
    flex-direction: column;
    text-decoration: none !important;
}

.category-item__title-line {
    width: 0px;
    height: 3px;
    border-radius: 3px;
    background: #6262a6;
    transition: all 0.3s;
}

.category-item:hover .category-item__title-line {
    width: 100px;
}

.category-item:hover .category-item__title{
    letter-spacing: 1px;
}


</style>