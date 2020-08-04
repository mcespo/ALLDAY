<template>
  <div class="menu">
    <ul class="nav-left">
      <li>
        <Link text="The Sofa" />
      </li>
      <li>
        <Link text="Reviews" />
      </li>
      <li>
        <Link text="About Us" />
      </li>
    </ul>
    <ul class="nav-right">
      <li>
        <Link text="Showroom" />
      </li>
      <li>
        <Link text="Swatches" />
      </li>
    </ul>
  </div>
</template>

<script>
import Link from "./Link";
export default {
  name: "Nav",
  components: {
    Link
  }
};
</script>

<style lang="scss">
.menu {
  ul {
    list-style: none;
    padding: 0;
    height: 100%;
    /* display: none; */
    @include for-size(large-up) {
      display: flex;
    }
    li {
      height: inherit;
      cursor: pointer;
      position: relative;
    }
    li:not(:last-of-type) {
      margin-right: 24px;
    }
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
    width: 326px;
    height: 51px;
    grid-area: logo;
    justify-self: center;
    transform: scale(0.75);
    @include for-size(large-up) {
      transform: scale(1);
    }
  }
  .menu {
    @include for-size(large-up) {
      display: contents;
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
