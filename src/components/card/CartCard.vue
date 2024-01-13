<template>
    <div class="cart-card">
        <div class="cart-card__content">

            <div class="cart-card__item product-item">
                <div class="product-item__image">
                    <img :src="require('@/assets/products/2.png')" alt="">
                </div>
                <div class="product-item__info">
                    <div class="product-item__title">Muffets & Tuffets Whole Wheat Bread 400 g</div>
                    <div class="product-item__price">1 x $80.58</div>
                </div>
                <v-icon class="product-item__delete" icon="mdi-close" size="small"></v-icon>
            </div>

            <div class="cart-card__item product-item">
                <div class="product-item__image">
                    <img :src="require('@/assets/products/4.png')" alt="">
                </div>
                <div class="product-item__info">
                    <div class="product-item__title">Muffets & Tuffets Whole Wheat Bread 400 g</div>
                    <div class="product-item__price">1 x $80.58</div>
                </div>
                <v-icon class="product-item__delete" icon="mdi-close" size="small"></v-icon>
            </div>

        </div>
        <div class="cart-card__footer">
            <div class="cart-card__info">
                <div class="cart-card__total-title">Total:</div>
                <div class="cart-card__total">$106.58</div>
            </div>
            <div class="cart-card__actions">
                <v-btn color="primary" variant="outlined">View Cart</v-btn>
                <v-btn color="primary">Checkout</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
.cart-card {
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    margin-top: 15px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    display: flex;
    flex-direction: column;
    
    .cart-card__footer {
        padding-top: 10px;
        .cart-card__info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;

            .cart-card__total-title {
                font-size: 18px;
            }
            .cart-card__total {
                font-size: 20px;
                font-weight: 700;
                color: #6262a6;
            }
        }

        .cart-card__actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

    }

    .cart-card__content {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 10px;

        .product-item {
            display: flex;
            gap: 10px;
            position: relative;
        }

        .product-item__image {
            min-width: 80px;
            max-width: 80px;
            height: 80px;
            background-color: #6262a62a;
            border-radius: 5px;
            padding: 10px;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .product-item__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .product-item__title {
                width: 150px;
                font-size: 16px;
                color: #6262a6; 
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .product-item__price {
                width: 150px;
                font-size: 16px;
                font-weight: 600;
                color: #2f2f2f;
            }


        }

    }

    .product-item__delete {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>