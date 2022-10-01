<template>
  <div class="">
    <Navbar />
    <Spinner v-if="isLoading" />
    <div v-else class="products">
      <div class="subcategories">
        <h3>View all categories</h3>
        <c-radio-group
          @change="
            (e) => {
              fetchProducts(e);
            }
          "
        >
          <c-radio :value="$route.params.id">All</c-radio>
          <c-radio v-for="sub in subcategories" :key="sub.id" :value="sub.id">{{
            sub.name
          }}</c-radio>
        </c-radio-group>
      </div>

      <div class="list">
        <h2 class="list-title" @click="openModal()">{{ products.name }}</h2>
        <div v-if="products.data.products.length > 0" class="list-products">
          <Product
            v-for="product in products.data.products"
            :key="product.name"
            :product="product"
          />
        </div>
        <div v-else>
          <span>Sorry, there are no products related to this category</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>1 of 20</span>
      <c-button variant-color="green">Next</c-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "~/components/Navbar.vue";
import Product from "~/components/Product.vue";
import Spinner from "~/components/Spinner.vue";
export default {
  name: "categories",
  props: {
    name: String,
  },
  data() {
    return {
      isLoading: true,
      open: false,
    };
  },
  computed: {
    ...mapGetters({
      products: "products/getProducts",
      subcategories: "products/getSubcategories",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "products/fetchProducts",
      fetchSubcategories: "products/fetchSubcategories",
    }),
    openModal() {
      this.open = true;
    },
  },
  async created() {
    try {
      await this.fetchProducts(this.$route.params.id);
      await this.fetchSubcategories(this.$route.params.id);
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
  },
  components: { Navbar, Product, Spinner },
};
</script>

<style scoped>
.products {
  width: 90%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}

.list-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.list-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1.2rem;
}

.subcategories h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1.1rem 0;
}

.footer {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}
</style>