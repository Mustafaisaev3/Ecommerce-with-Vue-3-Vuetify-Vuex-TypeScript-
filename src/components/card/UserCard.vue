<template>
    <div class="user-card">
        <v-list >
            <v-list-item
                v-for="item in userMenuItems"
                :key="item"
            >
                <a class="user-card__link" href="#" >
                    <h5 class="user-card__title">{{ item }}</h5>
                    <span class="user-card__title-line"></span>
                </a>
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup lang="ts">
const userMenuItems = ['Log in', 'Register', 'Forgot Password']
</script>
<style scoped lang="scss">
.user-card {
    background-color: #fff;

    border-radius: 5px;
    margin-top: 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}

.user-card__title {
    color: #222;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
}

.user-card__link {
    display: flex;
    flex-direction: column;
    text-decoration: none !important;
}

.user-card__title-line {
    width: 0px;
    height: 3px;
    border-radius: 3px;
    background: #6262a6;
    transition: all 0.3s;
}

.user-card__link:hover .user-card__title-line {
    width: 50px;
}
</style>