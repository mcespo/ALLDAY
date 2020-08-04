<template>
  <div>
    <img src="../../assets/product-images/sofa-red.jpg" alt="temp" />
  </div>
  <!-- <img :title="color" :src="image" :alt="description" /> -->
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "ProductImageSection",
  props: {
    name: {
      type: String,
      default: "Red"
    },
    img: {
      type: String
    }
  }
  // computed: mapGetters(["thisFabricColor"])
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
