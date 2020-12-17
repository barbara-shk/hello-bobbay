<template>
    <div class="w3-top w3-bar w3-padding-32 w3-pale-red w3-card menu-links">
        <router-link to="/" class="w3-padding w3-button">Home</router-link>
        <router-link to="/shop" class="w3-padding w3-button">Blog</router-link>
        <router-link to="/about" class="w3-padding w3-button">About</router-link>
</div>
</template>

<script>
export default {
    name:"Navbar",
    data(){
        return{}
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