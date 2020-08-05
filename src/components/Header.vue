<template>
  <header class="header">
    <AlldayLogo class="logo" />
    <Nav />
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
  z-index: 2;
  position: sticky;
  top: 0;
  background-color: var(--lightgray-200);
  min-width: 100vw;
  display: grid;
  justify-content: center;
  min-height: 80px;
  @include for-size(large-up) {
  }
  .logo {
    margin: 15px 0;
    width: 326px;
    height: 51px;
    grid-area: logo;
    justify-self: center;
    transform: scale(0.70);
    @include for-size(large-up) {
      margin: 0;
      grid-area: logo;
      transform: scale(1);
    }
  }
  nav {
    grid-area: navigatiom;
  }
}
</style>
