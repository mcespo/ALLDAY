<template>
  <aside>
    <Link text="Save Design for Later" />
  </aside>
</template>

<script>
import Link from "../Link";
export default {
  name: "ProductSaveLaterLink",
  components: {
    Link
  }
};
</script>

<style scoped lang="scss">
aside {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  width: fit-content;
  margin: 20px auto 50px;
  @include for-size(large-up) {
    margin-top: 0;
  }
  a::after {
    top: 74%;
  }
}
</style>
