<template>
  <div>
    <Navbar />
    <main class="main">
      <h1>Cart</h1>
      <section class="cart">
        <div v-for="product in cart" :key="product.image" class="product-cart">
          <img :src="product.image" alt="" />
          <h2>{{ product.name }}</h2>
          <div class="cantity">
            <button @click="reduceCant(product.image)">-</button>
            <span>{{ product.cant }}</span>
            <button @click="addCant(product.image)">+</button>
          </div>
          <span class="product-price"
            >${{
              Math.round(product.regularPrice * product.cant * 100) / 100
            }}</span
          >
          <div class="" @click="deleteProduct(product.image)">
            <c-icon name="delete" size="30px" class="delete" />
          </div>
        </div>
      </section>
      <div class="total">
        <span class="total-price"
          >Total:
          <h2>${{ totalPrice.toFixed(2) }}</h2>
        </span>
        <c-button variant-color="green" @click="clearCart()">Buy now</c-button>
      </div>
    </main>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Navbar from "~/components/Navbar.vue";
export default {
  name: "cart",
  computed: {
    ...mapGetters({
      cart: "cart/getCart",
      totalPrice: "cart/getTotalPrice",
    }),
  },
  methods: {
    ...mapActions({
      deleteProduct: "cart/deleteProduct",
    }),
    ...mapMutations({
      addCant: "cart/addCant",
      reduceCant: "cart/reduceCant",
      setProductToCart: "cart/setProductToCart",
    }),
    deleteP(value) {
      this.deleteProduct(value);
    },
    clearCart() {
      this.setProductToCart([]);

      this.$toast({
        title: "Added!",
        description: "Product added to the cart succesfully",
        status: "success",
        duration: 3000,
        position: "top-right",
      });
    },
  },
  components: { Navbar },
};
</script>

<style scoped>
.main {
  width: 90%;
  margin: 5rem auto;
}

.main h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-left: 5rem;
}

.cart {
  width: 90%;
  margin: 3rem auto;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 5px;
}

.product-cart {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1.5rem 0;
}

.product-cart img {
  width: 7rem;
  height: 8rem;
  overflow: hidden;
  object-fit: contain;
}

.product-cart h2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cantity {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.cantity button {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.2rem 1rem;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 700;
}

.delete {
  color: red;
  cursor: pointer;
}

.total {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5rem;
  gap: 2rem;
}

.total-price {
  display: flex;
  gap: 0.5rem;
  font-size: 1.3rem;
}

.total-price h2 {
  font-weight: 700;
}
</style>