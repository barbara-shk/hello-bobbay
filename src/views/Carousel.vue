<template>

    <div class="w3-display-container maincontainer" style="overflow:hidden">
        <img v-if="currentSlide==1" class="hero w3-animate-opacity" src="../assets/travel.jpg" alt="" style="width:100%;">
        <img v-else-if="currentSlide==2" class="hero w3-animate-opacity" src="../assets/travel-2.jpg" alt="" style="width:100%;">
        <img v-else class="hero w3-animate-opacity" src="../assets/backgroundpic.jpg" alt="" style="width:100%;">
        <article class="w3-display-middle">
                <h1>Shut up and go ! </h1>
                <button @click="getCountry()" class="w3-margin-right w3-button w3-2020-rose-tan w3-border-0 w3-hover-white">Where to?</button>
        </article>


  <transition name="fade">
      <div v-if="isShowing" class="modalBackground">
    <span v-if="isShowing" class="modal w3-display-middle">
        <h3 class="w3-display-middle">We're going to <strong>{{ countryPicked }} </strong>!!</h3>
      <button @click="isShowing=false" class="w3-display-bottommiddle w3-button w3-black" style="margin-bottom:2em;">Close</button>
    </span>
    </div>
  </transition>
    </div>

</template>
<script>
import axios from 'axios';
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
            isShowing: false,
        }
    },
    methods: {
                getCountry() {
            axios.get("https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-currency-name.json")
                .then(api => {
                    this.countries = api.data;
                    var countryList = this.countries;
                    var countryRandom = countryList[Math.floor(Math.random() * countryList.length)];
                    this.countryPicked = countryRandom.country
                    this.isShowing = !this.isShowing;
                    console.log(this.countryPicked)
                    return this.countryPicked
                            });
                    },
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
.maincontainer{
    max-height: 75vh;
}
.w3-display-container{
    width: 100vw;
}
h1 {
    color: rgb(255, 255, 255, 1);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 700;

    text-shadow: rgb(209, 156, 151) 1px 0px 0px, rgb(209, 156, 151) 0.540302px 0.841471px 0px, rgb(209, 156, 151) -0.416147px 0.909297px 0px, rgb(209, 156, 151) -0.989992px 0.14112px 0px, rgb(209, 156, 151) -0.653644px -0.756802px 0px, rgb(209, 156, 151) 0.283662px -0.958924px 0px, rgb(209, 156, 151) 0.96017px -0.279415px 0px;
}
img {
  position:relative;
  bottom:0;  
}
.w3-animate-opacity{
    transition: 0.7s;
}
.modal {
  background: rgb(255, 255, 255, 0.8);
  color: black;
  padding: 20px;
  width: 50vw;
  height: 25vh;
  position: absolute;
  border-radius: 20px;
  border: #000 1px;
  z-index: 9999;
  padding: 20px 30px;
}
.modalBackground{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>