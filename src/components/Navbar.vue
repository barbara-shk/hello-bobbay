<template>
    <div class="w3-top w3-bar w3-padding-32 w3-2020-rose-tan w3-text-white w3-card menu-links">
        <router-link to="/" class="w3-padding w3-button">Home</router-link>
        <router-link to="/blog" class="w3-padding w3-button">Blog</router-link>
        <a href="#contact" class="w3-padding w3-button">Contact</a>
        <router-link :to="{name: 'About'}" class="w3-padding w3-button">About</router-link>
        <a href="#" class="w3-right w3-button w3-bar-item" @click="displayCart = !displayCart">SHOPPING CART</a>

        
        <!-- CART -->
        <div class="w3-right w3-border" v-show="displayCart">
            <table class="w3-table w3-white">
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}€</td>
                </tr>
                <tr>
                    <th>Discount Code</th>
                    <th><input v-model="discountCode" type="text"></th>
                </tr>
                <tr>
                    <th>Total</th>
                    <th v-if="discountCode === 'quentin2020'">{{totalPrice}}€-5€ = {{totalPrice-5}}€</th>
                    <th v-else>{{totalPrice}}€</th>
                </tr>
            </table>
        </div>
</div>
</template>

<script>
export default {
    name:"Navbar",
    data(){
        return{
            props: ["cart"],
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