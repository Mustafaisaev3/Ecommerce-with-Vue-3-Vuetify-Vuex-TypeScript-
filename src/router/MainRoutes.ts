import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

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