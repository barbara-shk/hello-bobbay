<template>
<Carousel/>
<Skills/>

<Product :addItemToCart="addItemToCart" />
</template>

<script>
export default {
    name: 'Home',
    components: {
    Skills, Product, Carousel
  },
    data(){
        return{
            britImg:"https://64.media.tumblr.com/6b97e9ef77d73e17f5c80ab6a2635ae4/tumblr_nbotdtlmQS1qhub34o3_500.gif",
            props:["products"],
        }
    },
    methods: {
    },
    computed : {

    }
}
import Skills from './Skills.vue'
import Product from '../components/Product.vue'
import Carousel from '../views/Carousel.vue'


</script>

<style scoped>
h1 {
    color: rgb(255, 255, 255, 1);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;

    text-shadow: rgb(209, 156, 151) 1px 0px 0px, rgb(209, 156, 151) 0.540302px 0.841471px 0px, rgb(209, 156, 151) -0.416147px 0.909297px 0px, rgb(209, 156, 151) -0.989992px 0.14112px 0px, rgb(209, 156, 151) -0.653644px -0.756802px 0px, rgb(209, 156, 151) 0.283662px -0.958924px 0px, rgb(209, 156, 151) 0.96017px -0.279415px 0px;
}
.hero{
    /* background-image: url(../assets/backgroundpic.jpg); */
    background-size: cover;
    background-position: bottom;
    height:75vh;
}
</style>