<template>
  <div :key="text" class="item-container">
    <aside class="image-container">
      <img :src="thumb" :alt="text" />
    </aside>
    <aside class="image-title">
      <p>{{ color }}</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "ProductSwatchBox",
  props: {
    text: {
      type: String
    },
    color: {
      type: String
    },
    thumb: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.item-container {
  cursor: pointer;
  border: 3px solid var(--blue-200);
  border-radius: 6px;
  &:hover {
    border-color: pink;
  }
  .image-container {
    display: grid;
    place-items: center;
    height: 120px;
    img {
      width: 100%;
    }
  }
  .image-title {
    display: grid;
    place-items: center;
    color: var(--white-100);
    height: 40px;
    background-color: var(--blue-200);
  }
}
</style>
