<template>
  <div v-if="product.image">
    <div class="product" @click="showModal = true">
      <img :src="product.image" alt="" />
      <h3>{{ product.name }}</h3>
      <div class="review-container">
        <span :class="`review ${priceColor}`">{{
          product.customerReviewAverage ?? 1
        }}</span>
        <span>{{ `${product.customerReviewCount ?? "0"} Reviews` }}</span>
      </div>
      <span class="price">{{ `$${product.regularPrice}` }}</span>
    </div>
    <Modal v-show="showModal" @close-modal="closeModal" :product="product" />
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "product",
  props: {
    product: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    priceColor() {
      if (
        this.product.customerReviewAverage < 2 ||
        !this.product.customerReviewAverage
      ) {
        return "review-red";
      }
      if (
        this.product.customerReviewAverage >= 2 &&
        this.product.customerReviewAverage < 4
      ) {
        return "review-orange";
      }
      if (
        this.product.customerReviewAverage >= 4 &&
        this.product.customerReviewAverage < 4.5
      ) {
        return "review-greenLight";
      }
      if (this.product.customerReviewAverage >= 4.5) {
        return "review-green";
      }
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
  components: { Modal },
};
</script>

<style scoped>
.product {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.product:hover {
  transform: scale(1.03);
}

.product h3 {
  font-size: 0.9rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product img {
  width: 80%;
  margin: auto;
  height: 12rem;
  object-fit: contain;
}

.price {
  font-size: 1.5rem;
  font-weight: 900;
}

.review-container {
  display: flex;
  gap: 0.5rem;
  font-weight: 300;
}

.review {
  font-size: 1rem;
  font-weight: 700;
  padding: 0.1rem 0.8rem;
  border-radius: 10px;
}

.review-red {
  background-color: rgb(255, 179, 179);
  color: red;
}

.review-orange {
  background-color: rgb(253, 227, 177);
  color: orange;
}

.review-greenLight {
  background-color: rgb(206, 247, 206);
  color: rgb(83, 211, 83);
}

.review-green {
  background-color: lightgreen;
  color: green;
}

.modal {
  padding: 5rem;
}
</style>