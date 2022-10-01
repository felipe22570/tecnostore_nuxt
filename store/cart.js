export const state = () => ({
  cart: [],
  isAtCart: false,
});

export const getters = {
  getCart(state) {
    return state.cart;
  },
  getIsAtCart(state) {
    return state.isAtCart;
  },
  getTotalPrice(state) {
    return state.cart.reduce((acc, actual) => {
      return acc + actual.regularPrice * actual.cant;
    }, 0);
  },
};

export const mutations = {
  setProductToCart(state, payload) {
    state.cart = payload;
  },
  setIsAtCart(state) {
    state.isAtCart = !state.isAtCart;
  },
  addCant(state, payload) {
    const product = state.cart.find((c) => c.image === payload);

    product.cant++;
    state.cart = state.cart.map((c) => (c.image === payload ? product : c));
  },
  reduceCant(state, payload) {
    const product = state.cart.find((c) => c.image === payload);

    product.cant > 1 && product.cant--;
    state.cart = state.cart.map((c) => (c.image === payload ? product : c));
  },
};

export const actions = {
  addProductToCart(ctx, payload) {
    const isAtCart = ctx.state.cart.some(
      (product) => product.image === payload.image
    );

    const newProduct = { ...payload, cant: 1 };

    if (isAtCart) {
      ctx.commit("setIsAtCart");
    } else {
      const newCart = [...ctx.state.cart, newProduct];

      ctx.commit("setProductToCart", newCart);

      return true;
    }
  },

  deleteProduct(ctx, payload) {
    const newCart = ctx.state.cart.filter((c) => c.image !== payload);

    ctx.commit("setProductToCart", newCart);
  },
};
