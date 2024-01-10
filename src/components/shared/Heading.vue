<template>
    <div class="heading">
        <h2 class="heading__title">{{ title }}</h2>
        <p class="heading__subtitle">{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
const { title, subtitle } = defineProps({
    title: String,
    subtitle: String
})
</script>

<style lang="scss">
.heading {
    width: 100%;
    height: auto;
    padding-bottom: 30px;

    &__title{
        font-size: 28px;
        font-weight: 700;
        color: #222;
        position: relative;
    }

    &__subtitle{
        font-size: 14px;
        font-weight: 500;
        color: #4a5568;
        position: relative;
    }
}
</style>