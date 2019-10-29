import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            redirect: '/iphone'
        },
        {
            path: '/page',
            name: 'page',
            component: () => import('./components/HomePage.vue')
        },  
        {
            path: '/img',
            name: 'img',
            component: () => import('./components/navgationBar.vue')
        },          
        {
            path: '/iphone',
            name: 'iphone',
            component: () => import('./components/Iphone.vue')
        }

    ]
})