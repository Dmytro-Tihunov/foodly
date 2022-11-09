import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'home', component: () => import('/src/views/Home.vue') },
    { path: '/about', name: 'about', component: () => import('/src/views/About.vue') },
    { path: '/contacts', name: 'contacts', component: () => import('/src/views/Contacts.vue') },
    { path: '/app', name: 'app', component: () => import('/src/views/Application.vue') },
    { path: '/product', name: 'product', component: () => import('/src/views/Product.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router