<template>
  <div :id="id" :key="id" :class="{'active': active}" class="item-container">
    <aside class="image-container">
      <img
        @click.stop="$emit('thisSelection', 'toggleActive')"
        :src="thumb"
        :alt="description"
      />
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
    active: {
      type: String
    },
    index: {
      type: Number
    },
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
  },
};
</script>

<style scoped lang="scss">
.item-container {
  .image-container {
    display: grid;
    place-items: center;
    height: 120px;
    border-radius: 6px 6px 0 0;
    border: 3px solid transparent;
    img {
      z-index: 1;
      width: 100%;
      cursor: pointer;
    }
  }
  .image-title {
    z-index: 1;
    display: grid;
    place-items: center;
    border-radius: 0 0 6px 6px;
    height: 40px;
    color: var(--gray-100);
    background-color: var(--lightgray-100);
    border: 3px solid var(--lightgray-100);
  }
  &.active {
    cursor: default;
    .image-container {
      border-color: var(--blue-200);
    }
    .image-title {
      color: var(--white-100);
      background-color: var(--blue-200);
      border: 3px solid var(--blue-200);
    }
  }
  &:hover {
    .image-title {
      color: var(--white-100);
      background-color: var(--blue-100);
      border: 3px solid var(--blue-100);
    }
  }
}
</style>
