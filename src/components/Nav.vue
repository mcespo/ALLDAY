<template>
  <nav class="menu">
    <input class="visually-hidden" type="checkbox" id="toggle" />
    <label class="nav-button" for="toggle"></label>
    <div class="nav-list">
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
  </nav>
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
  position: relative;
  min-width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "navbutton ."
    "navmenu navmenu";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  @include for-size(large-up) {
    /* display: grid;
    grid-area: navmenu; */
  }
  .visually-hidden {
    position: absolute;
    opacity: 0;
  }
  .nav-button {
    font-family: "Bungee", cursive;
    padding: 6px;
    cursor: pointer;
    grid-area: navbutton;
    display: flex;
    text-align: center;
    align-items: center;
    min-width: 60px;
    height: 20px;
    border-radius: 6px;
    background-color: var(--blue-200);
    color: var(--white-100);
    margin: 25px 0;
    transform: translateX(-5.5vw);
    &::after {
      margin: 0 auto;
      content: "Menu";
    }
    @include for-size(large-up) {
      display: none;
    }
  }
  .visually-hidden[type="checkbox"]:checked + .nav-button{
    &::after {
      content: "Close";
    }
  }
  .visually-hidden[type="checkbox"]:not(:checked) ~ .nav-list {
    display: none;
    @include for-size(large-up) {
      display: grid;
    }
  }
  .visually-hidden[type="checkbox"]:checked ~ .nav-list {
    display: flex;
  }
  .nav-list {
    grid-area: navmenu;
    display: flex;
    flex-direction: column;
    @include for-size(large-up) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: "navleft . navright";
    }
    .nav-left,
    .nav-right {
      list-style: none;
      padding: 0;
      height: 100%;
      width: 100%;
      @include for-size(large-up) {
        display: flex;
      }
      li {
        text-align: center;
        height: 50px;
        cursor: pointer;
        position: relative;
        &:not(:last-of-type) {
          @include for-size(large-up) {
            margin-right: 24px;
          }
        }
        a {
          border-top: 3px solid var(--white-100);
          @include for-size(large-up) {
            border-top: none;
          }
          &:after {
            z-index: 1;
            top: 100%;
            @include for-size(large-up) {
              top: 70%;
            }
          }
        }
      }
    }
    .nav-left {
      grid-area: navleft;
    }
    .nav-right {
      grid-area: navright;
      justify-self: end;
      @include for-size(large-up) {
        justify-content: flex-end;
      }
      li:last-of-type {
        border-bottom: 3px solid var(--white-100);
        @include for-size(large-up) {
          border-bottom: none;
        }
      }
    }
  }
}

/* nav {
  .menu {
    position: relative;
    display: grid;
    @include for-size(large-up) {
      display: contents;
    }
    .menu-list {
      position: absolute;
      grid-area: mobilenav;
      @include for-size(large-up) {
        display: contents;
      }
    }
  }
} */
</style>
