<template>
<div v-for="(slide,index) in slides" :key="slide" :index="index">
    <img :src="slide" />
</div>
</template>

<script>
export default {
    name:"CarouselSlide",
    data(){
        return{
            slides:[
                '../assets/travel-blog-.jpg',
                '../assets/travel-blog-2.jpg',
                '../assets/backgroundpic.jpg',
            ]
        }
    }
}
</script>

<style scoped>
img{
    width:100%;
}

</style>