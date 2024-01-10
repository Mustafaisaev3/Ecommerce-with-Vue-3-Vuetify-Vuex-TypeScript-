<template>
    <v-container class="main-banners">
        <v-row>
            <v-col cols="12" md="8" sm="12" lg="8">
                <div class="banner">
                    <img :src="require('@/assets/banner/main1.jpg')" alt="">
                    <div class="banner__content">
                        <div class="banner__slogan">Get Ready To</div>
                        <h2 class="banner__title">TAKE ON THE DAY!</h2>
                        <p class="banner__text">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
                        <v-btn class="banner__btn" append-icon="mdi-arrow-right-drop-circle-outline">
                            Shop Now
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4" sm="12" lg="4">
                <div class="banner">
                    <img :src="require('@/assets/banner/main2.jpg')" alt="">
                    <div class="banner__content banner__content-secondary">
                        <div class="banner__slogan">Organic</div>
                        <h2 class="banner__title">Fresh</h2>
                        <p class="banner__text">Super Offer to 50% Off</p>
                        <v-btn class="banner__btn" append-icon="mdi-arrow-right-drop-circle-outline">
                            Shop Now
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    
</template>
<script setup lang="ts">
</script>
<style lang="scss">
    .main-banners {
        max-width: 100%;
    }

    .banner {
        width: 100%;
        height: 250px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover {
            animation: OpcityAnimation;
            animation-duration: 1s;
        }

        &__content {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 30px;
        }

        &__slogan {
            color: #ffbc5d;
            font-family: cursive;
        }

        &__title {
            color: #fff;
            font-size: 26px;
            font-weight: 500;
        }

        &__text {
            width: 60%;
            color: #a9bad8;
            font-size: 16px;
            font-weight: 500;
        }

        &__btn {
            margin-top: 16px;
            color: white !important;
            font-size: 14px;
            font-weight: 400;
            text-transform: capitalize;
            background: linear-gradient(90deg, #ff6b6b 0%, #ff4f4f 100%) !important;
        }

    }

    .banner__content-secondary {
        .banner__title {
            color: #222;
        }
        .banner__text {
            color: #616161;
        }
    }

    @keyframes OpcityAnimation {
        0% {
            opacity: 0.3;
        }
        
        100% {
            opacity: 1;
        }
    }
</style>