import http from "~/helpers/http";

export const state = () => ({
  products: [],
  subcategories: [],
});

export const getters = {
  getProducts(state) {
    return state.products;
  },
  getSubcategories(state) {
    return state.subcategories;
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setSubcategories(state, payload) {
    state.subcategories = payload;
  },
};

export const actions = {
  async fetchProducts(ctx, payload) {
    const { data } = await http.get(`/products/${payload}`);

    ctx.commit("setProducts", data);
  },

  async fetchSubcategories(ctx, payload) {
    const {
      data: {
        data: { subCategories },
      },
    } = await http.get(`/subcategories/${payload}`);

    ctx.commit("setSubcategories", subCategories);
  },
};
