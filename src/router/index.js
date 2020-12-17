/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Shop from '../views/Shop.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/shop",
            name: "Shop",
            component: Shop
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/about",
            name: "About",
            component: About
        }
    ]
});

export default router