<template>
  <div class="navbar">
    <nuxt-link to="/" class="navbar-title">
      <img src="~/assets/logo.png" alt="" />
      <h1>TecnoStore</h1>
    </nuxt-link>
    <nav>
      <a href="#">Categories</a>
      <a href="#">About us</a>
      <a href="#">Contact us</a>
      <button class="login">Login</button>
      <nuxt-link to="/cart" class="cart">
        <c-icon name="cart" size="27px" />
        <span class="number">{{ cart.length }}</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

// import { CIcon } from "@chakra-ui/vue";
export default {
  name: "navbar",
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
  },
};
</script>

<style scoped>
.navbar {
  padding: 1.2rem 5rem;
  display: flex;
  justify-content: space-between;
}

.navbar-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.navbar-title img {
  width: 3.2rem;
}

.navbar-title h1 {
  font-size: 1.8rem;
  font-weight: 900;
}

.navbar nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar nav a {
  font-weight: 400;
}

.login {
  background-color: darkcyan;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 10px;
  margin: 0 1rem;
}

.cart {
  position: relative;
}

.number {
  position: absolute;
  top: -15px;
  right: -8px;
}

.login:focus-within {
  animation: bounce-top 0.5s both;
}

.navbar nav a:hover {
  color: red;
  transition: ease-in;
  transition-duration: 0.2s;
}

@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
</style>