<template>
  <div>
    <img :title="title" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "ProductImageSection",
  props: {
    title: {
      type: String,
      default: "Red"
    },
    src: {
      type: String
    },
    alt: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
