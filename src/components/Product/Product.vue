<template>
  <main>
    <div class="image-container">
      <ProductShippingAside />
      <ProductImageSection
        :title="currentSwatch[0].color"
        :src="currentSwatch[0].image"
        :alt="currentSwatch[0].description"
      />
      <ProductFeaturesAside />
    </div>
    <div class="details-container">
      <ProductDescriptionArticle />
      <ProductPriceSection />
      <ProductAddToCartButton />
      <ProductSaveLaterLink />
      <ProductAlternativesSection />
      <div class="selection">
        <ProductSwatchBox
          @thisSelection="matchId(getSwatchId())"
          v-for="swatch in swatches"
          :id="swatch.id"
          :key="swatch.id"
          :thumb="swatch.thumb"
          :color="swatch.color"
          :description="swatch.description"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ProductShippingAside from "./ProductShippingAside";
import ProductImageSection from "./ProductImageSection";
import ProductFeaturesAside from "./ProductFeaturesAside";
import ProductDescriptionArticle from "./ProductDescriptionArticle";
import ProductPriceSection from "./ProductPriceSection";
import ProductAddToCartButton from "./ProductAddToCartButton";
import ProductSaveLaterLink from "./ProductSaveLaterLink";
import ProductAlternativesSection from "./ProductAlternativesSection";
import ProductSwatchBox from "./ProductSwatchBox";

export default {
  name: "Product",
  components: {
    ProductShippingAside,
    ProductImageSection,
    ProductFeaturesAside,
    ProductDescriptionArticle,
    ProductPriceSection,
    ProductAddToCartButton,
    ProductSaveLaterLink,
    ProductAlternativesSection,
    ProductSwatchBox
  },
  data: function() {
    return {
      swatches: [
        {
          id: 123456,
          color: "Amber",
          description: "Amber colored ALLDAY couch",
          thumb: require("@/assets/product-images/sofa-amber-fabric-thumb.jpg"),
          image: require("@/assets/product-images/sofa-amber.jpg")
        },
        {
          id: 789012,
          color: "Charcoal",
          description: "Charcoal colored ALLDAY couch",
          thumb: require("@/assets/product-images/sofa-charcoal-fabric-thumb.jpg"),
          image: require("@/assets/product-images/sofa-charcoal.jpg")
        },
        {
          id: 345678,
          color: "Red",
          description: "Red colored ALLDAY couch",
          thumb: require("@/assets/product-images/sofa-red-fabric-thumb.jpg"),
          image: require("@/assets/product-images/sofa-red.jpg")
        }
      ],
      currentSwatch: [{
        id: 123456,
        color: "Amber",
        description: "Amber colored ALLDAY couch",
        thumb: require("@/assets/product-images/sofa-amber-fabric-thumb.jpg"),
        image: require("@/assets/product-images/sofa-amber.jpg")
      }]
    };
  },
  methods: {
    getSwatchId: function() {
      return Number(event.target.id);
    },
    matchId: function(id) {
      this.currentSwatch = this.swatches.filter(swatch => swatch.id === id);
    }
  }
};
</script>

<style scoped lang="scss">
main {
  display: grid;
  max-width: var(--max-width);
  justify-content: space-evenly;
  margin: 50px auto 96px;
  width: 90vw;
  @include for-size(small-up) {
    width: 80vw;
  }
  @include for-size(medium-up) {
    width: 60vw;
  }
  @include for-size(large-up) {
    grid-template-columns: 2fr 1fr;
    column-gap: 40px;
    width: 94vw;
  }
  .image-container {
    @include for-size(largest-up) {
      max-width: 872px;
    }
  }
  .details-container {
    border-top: 2px solid var(--white-100);
    padding-top: 30px;
    @include for-size(large-up) {
      border-top: none;
      padding-top: 0;
    }
    @include for-size(largest-up) {
      max-width: 586px;
    }
    .selection {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 1em;
    }
  }
}
</style>
