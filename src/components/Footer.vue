
<template>
<Contact/>
<footer class="w3-center w3-black w3-padding-16">
  <p>Made with <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">Vue.js</a> w/ ♥</p>
</footer>
</template>

<script>
import Contact from '../views/Contact.vue'
export default {
    name:"Footer",
    components: {
    Contact
  },
    data(){
        return{}
    }
}
</script>

<style lang="stylus" scoped>

</style>