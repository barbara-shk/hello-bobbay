<template>


<Product v-on:addItemToCart="addItemToCart" style="margin-top:100px;"/>



<div class="modal-vue">
  
  <!-- button show -->
  <button @click="showModal = true">show</button>
  
  <!-- overlay -->
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  
  <!-- modal -->
        <div class="w3-border modal" v-if="showModal">
    <button class="close" @click="showModal = false">x</button>
    <h3>CART</h3>
<!-- CART -->

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
    name: 'Shop',
    components: {
    Product
  },
  data(){
    return{
        props:["cart"],
        showModal: false,
        cart:[""]
        }
    },
    methods:{
        addItemToCart(products){
            console.log('coucou');
            this.$emit('addItemToCart', products)
        }
    }
}

import Product from '../components/Product.vue'
</script>
<style>
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal-vue .modal {
  position: relative;
  width: 50vw;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
}

.modal-vue .close{
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>