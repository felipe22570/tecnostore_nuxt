<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <img :src="product.image" alt="" />
      <div class="product-content">
        <h1>{{ product.name }}</h1>
        <p>
          {{ product.longDescription ?? "Sorry, no description available" }}
        </p>
        <h3 class="product-price">${{ product.regularPrice }}</h3>
      </div>
      <c-button-group class="buttons">
        <c-button variant="outline" variant-color="green" @click="add(product)"
          >Add to the cart</c-button
        >
        <c-button
          variant="outline"
          variant-color="red"
          @click="$emit('close-modal')"
          >Cancel</c-button
        >
      </c-button-group>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "modal",
  props: {
    product: Object,
  },
  computed: {
    ...mapGetters({
      isAtCart: "cart/getIsAtCart",
    }),
  },
  methods: {
    ...mapActions({
      addProductToCart: "cart/addProductToCart",
    }),
    ...mapMutations({
      setIsAtCart: "cart/setIsAtCart",
    }),
    add(product) {
      this.addProductToCart(product);

      if (this.isAtCart) {
        this.$toast({
          title: "Sorry",
          description: "This product is aready at cart",
          status: "warning",
          duration: 3000,
          position: "top-right",
        });

        this.setIsAtCart();
      } else {
        this.$emit("close-modal");

        this.$toast({
          title: "Added!",
          description: "Product added to the cart succesfully",
          status: "success",
          duration: 3000,
          position: "top-right",
        });
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  position: relative;
  background-color: white;
  height: 500px;
  width: 65%;
  margin-top: 8%;
  padding: 2rem 6rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 7rem;
  overflow: hidden;
  object-fit: contain;
}

.modal img {
  width: 12rem;
  height: 20rem;
  object-fit: contain;
}

.product-content {
  transform: translateY(-2rem);
}

.product-content h1 {
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-content p {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2.5rem;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

.buttons {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 2rem 4rem;
}

/* button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
} */
</style>