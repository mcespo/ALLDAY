<template>
  <a :title="text" :href="url">{{ text }}</a>
</template>

<script>
export default {
  name: "Link",
  props: {
    text: {
      type: String
    },
    url: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style scoped lang="scss">
a {
  font-family: "Bungee", cursive;
  color: var(--gray-100);
  text-decoration: none;
  display: grid;
  height: 100%;
  align-items: center;
  color: inherit;
  &:after {
    content: "";
    bottom: 0;
    top: 60%;
    left: 50%;
    display: block;
    height: 3px;
    position: absolute;
    border-radius: 1px;
    background-color: var(--blue-200);
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 0;
    opacity: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
    opacity: 1;
  }
}
</style>
