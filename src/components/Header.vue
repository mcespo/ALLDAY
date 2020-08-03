<template>
  <header class="header">
    <nav>
      <AlldayLogo class="logo" />
      <ul class="nav-left">
        <li>
          <a class="allday-link" href="#">The Sofa</a>
        </li>
        <li>
          <a class="allday-link" href="#">Reviews</a>
        </li>
        <li>
          <a class="allday-link" href="#">About Us</a>
        </li>
      </ul>
      <ul class="nav-right">
        <li>
          <a class="allday-link" href="#">Showroom</a>
        </li>
        <li>
          <a  class="allday-link" href="#">Swatches</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import AlldayLogo from "../assets/logo/allday-logo.svg";
export default {
  name: "Header",
  components: {
    AlldayLogo
  }
};
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--lightgray-200);
  /* box-shadow: 0 1px 0 #c6c7c9; */
  margin: 0 auto;
  height: 100px;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    height: 100%;
    li {
      height: inherit;
      cursor: pointer;
      position: relative;
    }
    li:not(:last-of-type) {
      margin-right: 24px;
    }
  }
  nav {
    margin: 0 auto;
    width: 94vw;
    max-width: var(--max-width);
    height: inherit;
    display: grid;
    grid-template-areas: "navleft logo navright";
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    .logo {
      grid-area: logo;
      justify-self: center;
    }
    .nav-left {
      grid-area: navleft;
    }
    .nav-right {
      grid-area: navright;
      justify-self: end;
    }
  }
}
</style>
