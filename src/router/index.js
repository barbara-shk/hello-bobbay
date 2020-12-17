/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Carousel from '../views/Carousel.vue'
import CarouselSlide from '../views/CarouselSlide.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/blog",
            name: "Blog",
            component: Blog
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
        },
        {
            path: "/product/:name",
            name: "ProductDetails",
            component: ProductDetails
        },
        {
            path: "/carousel",
            name: "Carousel",
            component: Carousel
        },
        {
            path: "/carouselslide",
            name: "CarouselSlide",
            component: CarouselSlide
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound
        }
    ]
});

export default router