import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const MainRoutes = {
    path: '/',
    name: 'Public',
    component: () => import('@/layouts/Main.vue'),
    redirect: '/',
    children: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
}

export default MainRoutes;