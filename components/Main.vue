<template>
  <div class="main">
    <div class="banner">
      <div class="banner-text">
        <h1>Welcome to TecnoStore!</h1>
        <p>
          Thousands of technological products, with the best quality and at your
          fingertips!
        </p>
      </div>
    </div>
    <div class="category-list">
      <nuxt-link
        :to="`/category/${category.id}`"
        class="category"
        v-for="category in categories"
        :key="category.id"
        :name="category.name"
      >
        <div class="category-text">
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
        </div>
        <img :src="`${category.image}`" alt="" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { categories } from "@/data/categories.json";
export default {
  mounted() {
    console.log(categories);
  },
  data() {
    return {
      categories: categories,
    };
  },
};
</script>

<style scoped>
.main {
  width: 90%;
  margin: 2rem auto;
}

.banner {
  border-radius: 10px;
  background-color: rgb(228, 228, 228);
  height: 20rem;
}

.banner-text {
  width: 40%;
  height: inherit;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.banner-text h1 {
  font-size: 3rem;
  font-weight: 900;
}

.banner-text p {
  width: 80%;
  font-size: 1.2rem;
  line-height: 1.4;
}

.category-list {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.category {
  border-radius: 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 1;
  gap: 1rem;
  padding: 0.5rem 3rem;
  height: 10rem;
  object-fit: cover;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.category:hover {
  transform: scale(1.05);
}

.category-text {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.category img {
  width: 9rem;
  height: 80%;
  object-fit: contain;
}

.category h3 {
  font-size: 1.3rem;
  font-weight: 700;
}

.category p {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>