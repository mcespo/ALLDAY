<template>
  <img src="../../assets/product-images/sofa-red.jpg" alt="temp" />
  <!-- <img :title="color" :src="image" :alt="description" /> -->
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "ProductImageSection",
  // computed: mapGetters(["thisFabricColor"])
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
