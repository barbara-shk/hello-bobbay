<template>
<div class="w3-display-container">
    <img v-if="currentSlide==1" class="w3-display-container w3-wide hero" src="../assets/travel.jpg" alt="" style="width:100%;">
    <img v-else-if="currentSlide==2" class="w3-display-container w3-wide hero" src="../assets/travel-2.jpg" alt="" style="width:100%;">
    <img v-else class="w3-display-container w3-wide hero" src="../assets/backgroundpic.jpg" alt="" style="width:100%;">
    <article class="w3-display-middle">
            <h1>Shut up and go ! </h1>
            <button onclick="document.getElementById('britModal').style.display='block'" class="w3-margin-right w3-button w3-2020-rose-tan w3-border-0 w3-hover-white">Guess who?</button>
    </article>
</div>
</template>
<script>
export default {
    name:"Carousel",
    data(){
        return{
            slides:[
            {url:'../assets/travel-blog-.jpg'},
            {url:'../assets/travel-blog-2.jpg'},
            {url:'../assets/backgroundpic.jpg'},
            ],
            currentSlide:0,
        }
    },
    mounted() {
        setInterval(() => {
            if(this.currentSlide === 2) {
                this.currentSlide =  0;
            }else {
                this.currentSlide++;
            }
        }, 2000)
    }
  };
</script>

<style scoped>
.w3-display-container{
    height:50vh;
}
h1 {
    color: rgb(255, 255, 255, 1);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;

    text-shadow: rgb(209, 156, 151) 1px 0px 0px, rgb(209, 156, 151) 0.540302px 0.841471px 0px, rgb(209, 156, 151) -0.416147px 0.909297px 0px, rgb(209, 156, 151) -0.989992px 0.14112px 0px, rgb(209, 156, 151) -0.653644px -0.756802px 0px, rgb(209, 156, 151) 0.283662px -0.958924px 0px, rgb(209, 156, 151) 0.96017px -0.279415px 0px;
}
</style>