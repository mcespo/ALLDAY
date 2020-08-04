<template>
  <button>Add to Cart</button>
</template>

<script>
export default {
  name: "ProductAddToCartButton"
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  font-family: Bungee;
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  border-radius: 6px;
  padding: 14px 0;
  color: var(--white-100);
  background-color: var(--blue-200);
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: var(--blue-100);
  }
}
</style>
