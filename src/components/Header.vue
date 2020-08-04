<template>
  <header class="header">
    <nav>
      <AlldayLogo class="logo" />
      <Nav />
    </nav>
  </header>
</template>

<script>
import Nav from "./Nav";
import AlldayLogo from "../assets/logo/allday-logo.svg";

export default {
  name: "Header",
  components: {
    AlldayLogo,
    Nav
  }
};
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--lightgray-200);
  margin: 0 auto;
  height: 100px;
}
</style>
