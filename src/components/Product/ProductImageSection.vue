<template>
  <img :title="color" :src="image" :alt="description" />
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductImageSection",
  // data: () => ({
  //   fabric: ""
  // }),
  computed: mapState({
    image: state => state.fabric[0].image,
    description: state => state.fabric[0].description,
    color: state => state.fabric[0].color
  })
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
