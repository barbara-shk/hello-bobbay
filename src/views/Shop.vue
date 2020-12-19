<template>
        <!-- content -->
        <div class="w3-container w3-center" style="margin-top:40px">
            <h1>{{ title }}</h1>
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
                        <p><button v-on:click="addItemToCart( product )">ADD TO CART</button></p>
                    </div>
                </div>
                
            </div>
        </div>

        <div class="modal-vue">
  
  <!-- button show -->
  <button @click="showModal = true">show</button>
  
  <!-- overlay -->
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  
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
  
</div>
</template>

<script>
export default {
    data(){
        return{
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
        this.totalPrice += products.price,
        this.displayCart = true;
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