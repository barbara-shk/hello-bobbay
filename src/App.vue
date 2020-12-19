<template>
    <Navbar/>
    
<div> 
  <!-- ROUTER-VIEW PERMET DE CHARGER LES COMPOSANTS CORRESPONDANTS DE CHAQUE ROUTE -->
  <router-view class="w3-display-container w3-wide" style="margin-top:95px"/>
  <!-- ROUTER-VIEW PERMET DE CHARGER LES COMPOSANTS CORRESPONDANTS DE CHAQUE ROUTE -->

  <Footer class="w3-container w3-padding-32" id="contact"/>
</div>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Blog from './views/Blog.vue'
import About from './views/About.vue'


export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home, Navbar,Footer,Blog,About
  },
}
</script>

<style>
#app {
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
      body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important; 
}
h1{
  font-weight: 600;
};
</style>
