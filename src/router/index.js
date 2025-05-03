import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewsPage from '../views/NewsPage.vue'
import CategoryPage from '../views/CategoryPage.vue'
import AboutPage from '../views/AboutPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/news/:id',
        name: 'news-detail',
        component: NewsPage,
        props: true
    },
    {
        path: '/category/:category',
        name: 'category',
        component: CategoryPage,
        props: true
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router
