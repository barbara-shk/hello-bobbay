<template>
    <Header><p>Non, mais ça va pas</p></Header>
    
<div class="w3-container"> 
  <!-- ROUTER-VIEW PERMET DE CHARGER LES COMPOSANTS CORRESPONDANTS DE CHAQUE ROUTE -->
  <router-view/>
  <!-- ROUTER-VIEW PERMET DE CHARGER LES COMPOSANTS CORRESPONDANTS DE CHAQUE ROUTE -->


  <Footer />
</div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Product from './components/Product.vue'
import Shop from './views/Shop.vue'
import Contact from './views/Contact.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home, Header, Footer,Product,Shop,Contact
  }
}
</script>

<style>
#app {
  @import url("https://www.w3schools.com/w3css/4/w3.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  body, h1, h2, h3, h4, h5, h6 {
    font-family: Futura, Helvetica, Arial, sans-serif !important; 
}
}
</style>
