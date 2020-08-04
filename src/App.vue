<template>
  <div id="app">
    <Header />
    <Product />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Product from "./components/Product/Product.vue";

export default {
  name: "App",
  components: {
    Header,
    Product
  }
};
</script>

<style lang="scss">
:root {
  --white-100: hsl(0, 0%, 100%);
  --black-100: hsl(0, 0%, 0%);
  --gray-100: hsl(0, 0%, 27%);
  --gray-200: hsl(0, 0%, 29%);
  --lightgray-100: hsl(0, 0%, 91%);
  --lightgray-200: hsl(0, 0%, 95%);
  --blue-100: hsl(214, 94%, 32%);
  --blue-200: hsl(214, 90%, 50%);
  --red-100: hsl(359, 89%, 50%);

  --max-width: 1440px;
}
* {
  margin: 0;
}
html,
body {
  background-color: var(--lightgray-200);
  color: var(--gray-100);
  font-family: Raleway, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  font-feature-settings: "kern", "liga", "clig", "calt";
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Bungee", cursive;
  font-weight: 400;
  line-height: 1.6;
}
p {
  line-height: 1.45;
}
button {
  border-style: none;
}
</style>
