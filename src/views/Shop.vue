<template>
  
  <!-- button show -->
  <button class="w3-button w3-black w3-top w3-center" @click="showModal = true" style="top:109px; max-width:10em;">({{cartObj.length}}) Open Cart</button>



<!-- PRODUCTS -->
        <!-- content -->
        <div class="w3-container w3-center" style="margin-top:160px">
            <h1 style="text-transform:uppercase;">{{ title }}</h1>
            <h3 style="margin-bottom:100px;">{{ subtitle }}</h3>
            <!-- products -->
            <div class="w3-row-padding">

                <!-- single product -->
                <div v-for="(product, index) in products" :key="index" class="w3-col l4 m6 w3-padding">
                    <img :src="product.hovered === null ? product.image : product.image2" @mouseover="product.hovered = index" @mouseout="product.hovered = null" style="cursor: pointer" />
                    <div class="w3-container w3-center w3-border">
                        <h3>{{ product.name }}</h3>
                        <h4>{{ product.price }} €</h4>
                        <p v-if="product.stock==0">OUT OF STOCK</p>
                        <p v-else><strong>{{ product.stock }}</strong> items in stock</p>
                        <p>
                            <span v-for="(value, name) in product.tags" :key="name"><strong>{{ name }}:</strong>{{ value }} </span>
                        </p>
                        <p><button class="w3-button w3-black" v-on:click="addItemToCart( product )">ADD TO CART</button></p>
                    </div>
                </div>
                
            </div>
        </div>
<!-- END PRODUCTS -->

<!--CART-->

<div class="modal-vue">
  <!-- overlay -->
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  <transition name="fade">
  <!-- modal -->
    <div class="w3-border modal" v-if="showModal">
    <button class="close" @click="showModal = false">x</button>
    <h3>CART</h3>
            <table class="w3-table w3-white">
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                <tr v-for="(item, index) in cartObj" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.price}}€</td>
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
    </transition>
</div>

<!--END CART-->
</template>

<script>
export default {
    data(){
        return{
        title:"I'll take you to my candle shop",
        subtitle:"Inspired by scandinavian culture, those candles will mask the foul scent of your turkey burning in the over",
        products: [
                {
                    name: "Fjord",
                    price: 10,
                    image: require("../assets/fjord-candle.jpg"),
                    image2: require("../assets/fjord-candle-2.jpg"),
                    hovered:null,
                    stock: 15,
                    attributes: {
                        type:"candle",
                        for:"spring",
                    }
                },
                {
                    name: "Skög",
                    price: 5,
                    image: require("../assets/skog-candle.jpg"),
                    image2: require("../assets/skog-candle-2.jpg"),
                    hovered:null,
                    stock: 25,
                    attributes: {
                        type:"candle",
                        for:"autumn",
                    }
                },
                {
                    name: "Hygge",
                    price: 15,
                    image: require("../assets/hygge-candle.jpg"),
                    image2: require("../assets/hygge-candle-2.jpg"),
                    hovered:null,
                    stock: 25,
                    attributes: {
                        type: "candle",
                        for: "winter",
                    }
                }
            ],
        cartObj:[],
                showModal: false,
            totalPrice: 0,
            discountCode:"",
        }
    },
    methods:{
        addItemToCart(products){
        this.cartObj.push(products);
        this.totalPrice += products.price;
        }
    }
}
</script>

<style scoped>
img{
    width:100%;
}

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
  position: absolute;
  width: 50vw;
  z-index: 9999;
  top:50%;
  left:25%;
  padding: 20px 30px;
  background-color: #fff;
}

.modal-vue .close{
  position: absolute;
  top: 10px;
  right: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>