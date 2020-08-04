<template>
  <article>
    <h2>1. Choose a Fabric</h2>
    <p>Choose your choice of fabrics to leather</p>
    <strong>Fabric Choices</strong>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductAlternativesSection",
  computed: mapGetters(["allFabrics"])
};
</script>

<style scoped lang="scss">
article {
  border-top: 2px solid var(--white-100);
  padding-top: 30px;
  h2 {
    font-size: 1rem;
    color: var(--blue-100);
  }
  strong {
    display: block;
    margin: 32px 0 16px;
  }
}
</style>
