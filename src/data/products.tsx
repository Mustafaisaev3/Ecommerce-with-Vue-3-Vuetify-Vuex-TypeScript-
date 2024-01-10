export interface ProductType {
    id: string | number,
    title: string,
    size: string,
    price: number,
    image: string
}

export const Products: ProductType[] = [
    {
        id: 1,
        title: 'Muffets & Tuffets Whole Wheat Bread 400 g',
        size: '1 KG',
        price: 80.00,
        image: require('@/assets/products/1.png')
    },
    {
        id: 2,
        title: 'Fresh Bread and Pastry Flour 200 g',
        size: '1 KG',
        price: 90.00,
        image: require('@/assets/products/2.png')
    },
    {
        id: 3,
        title: 'Peanut Butter Bite Premium Butter Cookies 600 g',
        size: '1 KG',
        price: 70.00,
        image: require('@/assets/products/3.png')
    },
    {
        id: 4,
        title: 'SnackAmor Combo Pack of Jowar Stick and Jowar Chips',
        size: '1 KG',
        price: 80.00,
        image: require('@/assets/products/4.png')
    },
    {
        id: 5,
        title: 'Yumitos Chilli Sprinkled Potato Chips 100 g',
        size: '1 KG',
        price: 80.00,
        image: require('@/assets/products/5.png')
    },
    {
        id: 6,
        title: 'Fantasy Crunchy Choco Chip Cookies',
        size: '1 KG',
        price: 75.00,
        image: require('@/assets/products/6.png')
    },
    {
        id: 7,
        title: 'Fresh Bread and Pastry Flour 200 g',
        size: '1 KG',
        price: 80.00,
        image: require('@/assets/products/7.png')
    },
    {
        id: 8,
        title: 'Milky Silicone Heart Chocolate Mould',
        size: '1 KG',
        price: 80.00,
        image: require('@/assets/products/8.png')
    },
    {
        id: 9,
        title: 'Chocolate-chip-cookies 250 g',
        size: '1 KG',
        price: 85.00,
        image: require('@/assets/products/9.png')
    },
    {
        id: 10,
        title: 'Cupcake Holder for Wedding Party 100 g',
        size: '1 KG',
        price: 85.00,
        image: require('@/assets/products/10.png')
    },
    {
        id: 11,
        title: 'SnackAmor Combo Pack of Jowar Stick and Jowar Chips',
        size: '1 KG',
        price: 85.00,
        image: require('@/assets/products/4.png')
    },
    {
        id: 12,
        title: 'Chocolate-chip-cookies 250 g',
        size: '1 KG',
        price: 85.00,
        image: require('@/assets/products/9.png')
    },
]