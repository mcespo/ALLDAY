<template>
  <aside>
    <a>Save Design for Later</a>
  </aside>
</template>

<script>
export default {
  name: "ProductSaveLaterLink"
};
</script>

<style scoped lang="scss">
aside {
  width: 100%;
  height: 40px;
  position: relative;
  margin: 0 auto 50px;
  cursor: pointer;
  width: fit-content;
  a::after {
    top: 74%;
  }
}
</style>
