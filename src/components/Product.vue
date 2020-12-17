
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
</template>

<script>
export default {
    name:"Product",
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
            cart:[],
            totalPrice: 0,
            discountCode:"",
            displayCart: false,
        }
    },
    methods:{
        addItemToCart(products){
            this.$emit('addItemToCart', products)
        }
    }
}
</script>

<style scoped>
img{
    width:100%;
}
</style>