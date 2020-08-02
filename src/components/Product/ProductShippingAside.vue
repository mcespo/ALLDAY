<template>
  <aside>
    <span class="secure">Secure Checkout</span>
    <span class="shipping">Ships in 5 to 7 Business Days</span>
  </aside>
</template>

<script>
export default {
  name: "ProductImageSectionHeader"
};
</script>

<style scoped lang="scss">
aside {
  display: flex;
  justify-content: space-between;
  .secure {
    display: flex;
    align-items: center;
    &::before {
      content: "";
      display: inline-block;
      width: 14px;
      height: 19px;
      background: transparent url("/static/icons/lock-icon.svg") no-repeat 50%
        50% / contain;
    }
  }
}
</style>
