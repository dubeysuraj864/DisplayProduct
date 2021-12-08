const app = Vue.createApp({
    data() {
        return {
            cart : 0,
            brand: 'Versace',
            product: 'Socks',
            image: './assets/images/black_socks.jpg',
            inStock : true,
           
            details : ['50% cotton', '30% wool', '20% polyster'],
            variants : [
                { id:2334, color: 'black', image:'./assets/images/black_socks.jpg' ,quantity: 50},
                { id:2235, color: 'white', image: './assets/images/white_socks.jpg' ,quantity: 5},
                { id:2236, color: 'gold',image: './assets/images/yellow_socks.jpg' ,quantity: 0},
                { id:2235, color: 'plum', image:'./assets/images/purple_socks.jpg' ,quantity: 5},
            ],
            activeClass : true
            
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title(){
            return this.brand+' '+ this.product
        }
    }
})