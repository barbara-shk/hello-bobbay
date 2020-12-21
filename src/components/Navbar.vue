<template>
    <div class="w3-top w3-bar w3-padding-32 w3-2020-rose-tan w3-text-white w3-card menu-links">
        <router-link to="/" class="w3-padding w3-button w3-hover-white">Home</router-link>
        <router-link to="/blog" class="w3-padding w3-button w3-hover-white">Blog</router-link>
        <router-link to="/shop" class="w3-padding w3-button w3-hover-white">Shop</router-link>
        <router-link :to="{name: 'About'}" class="w3-padding w3-button w3-hover-white">About</router-link>
        <a href="#contact" class="w3-padding w3-button w3-hover-white">Contact</a>

        

</div>
</template>

<script>
export default {
    name:"Navbar",
    data(){
        return{
        }
    }
}
</script>

<style scoped>
.menu-links{
  font-size: 1.3em;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-weight: 600;
}

</style>