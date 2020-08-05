<template>
  <div
    @click.stop="$emit('thisSelection')"
    :id="id"
    :key="id"
    class="item-container"
  >
    <aside :id="id" class="image-container">
      <img :id="id" :src="thumb" :alt="description" />
    </aside>
    <aside :id="id" class="image-title">
      <p :id="id">{{ color }}</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "ProductSwatchBox",
  props: {
    id: {
      type: Number
    },
    color: {
      type: String
    },
    thumb: {
      type: String
    },
    description: {
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
    /* border-color: pink; */
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
