<template>
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      </div>
    </nav> -->
    <div class="w3-top w3-bar w3-padding w3-pale-red">
        <router-link to="/" class="w3-padding">Home</router-link>
        <router-link to="/shop" class="w3-padding">Shop</router-link>
        <router-link to="/contact" class="w3-padding">Contact</router-link>
</div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{}
    }
}
</script>

<style scoped>
</style>