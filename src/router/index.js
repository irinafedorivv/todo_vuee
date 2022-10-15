import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoView from '../views/TodoView'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: TodoView
    },
    {
        path: '/movie',
        name: 'movie',
        component: () => import('../views/MovieView.vue')
    },
    {
        path: '/currency',
        name: 'currency',
        component: () => import('../views/CurrencyView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router