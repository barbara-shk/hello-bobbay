<template>
<Carousel/>
<Skills/>

</template>

<script>
import axios from 'axios';
export default {
    name: 'Home',
    components: {
    Skills, Carousel
  },
    data(){
        return{
            countryPicked:"",

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
                    console.log(this.countryPicked)
                    return this.countryPicked
                            });
                    },
    },
    computed : {

    }
}
import Skills from './Skills.vue'
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

</style>