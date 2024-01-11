<template lang="">
    <v-navigation-drawer
        left
        app
        class="sidebar"
        expand-on-hover 
        width="320"
        :v-model="drawer"
    >
      <v-sheet class="pa-6">
        <!-- Logo -->
        <v-locale-provider>
            <Logo class="mb-5" />
        </v-locale-provider>

        <!-- Menu List -->
        <perfect-scrollbar class="scrollnavbar">
            <v-list class="category-list">
                <!---Menu Loop -->
                <SidebarItem v-for="(item, i) in CategoryList" :key="i" :menu_item="item" />
            </v-list>
            <div class="pa-6 userbottom">
                <Profile />
            </div>
        </perfect-scrollbar>


      </v-sheet>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import Logo from './Logo.vue';
import { SidebarItemPropsType } from '@/types'
import SidebarItem from '../sidebar/SidebarItem.vue';
import { ref } from 'vue';

const drawer = ref(false)

const CategoryList: SidebarItemPropsType[] = [
    {
        title: 'Vegetables & Fruit',
        image: require('@/assets/category/vegetable.svg'),
        link: '/'
    },
    {
        title: 'Beverages',
        image: require('@/assets/category/cup.svg'),
        link: '/'
    },
    {
        title: 'Meats & Seafood',
        image: require('@/assets/category/meats.svg'),
        link: '/'
    },
    {
        title: 'Breakfast & Dairy',
        image: require('@/assets/category/breakfast.svg'),
        link: '/'
    },
    {
        title: 'Frozen Foods',
        image: require('@/assets/category/frozen.svg'),
        link: '/'
    },
    {
        title: 'Biscuits & Snacks',
        image: require('@/assets/category/biscuit.svg'),
        link: '/'
    },
    {
        title: 'Grocery & Staples',
        image: require('@/assets/category/grocery.svg'),
        link: '/'
    },
    {
        title: 'Milk & Dairies',
        image: require('@/assets/category/milk.svg'),
        link: '/'
    },
]
</script>

<style scoped>
.sidebar {
    border-right: 1px solid rgba(0,0,0,0.12);
}
.category-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.leftSidebar {

    @media (max-width: 1200px) {
        position: absolute;
        left: -100%;
    }
}
</style>