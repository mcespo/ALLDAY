<template>
  <section>
    <h2>1. Choose a Fabric</h2>
    <p>Choose your choice of fabrics to leather</p>
    <strong>Fabric Choices</strong>
    <div class="selection">
      <div
        v-for="fabric in allFabrics"
        v-bind:key="fabric.id"
        class="item-container"
      >
        <aside class="image-container">
          <img :src="fabric.thumb" :alt="fabric.description" />
        </aside>
        <aside class="image-title">
          <p>{{ fabric.color }}</p>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductAlternativesSection",
  computed: mapGetters(["allFabrics"])
};
</script>

<style scoped lang="scss">
section {
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
  .selection {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1em;
    .item-container {
      border: 3px solid var(--blue-200);
      border-radius: 6px;
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
  }
}
</style>
