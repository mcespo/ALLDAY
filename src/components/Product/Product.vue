<template>
  <main>
    <div class="image-container">
      <ProductShippingAside />
      <ProductImageSection img="thus" />
      <ProductFeaturesAside />
    </div>
    <div class="details-container">
      <ProductDescriptionArticle />
      <ProductPriceSection />
      <ProductAddToCartButton />
      <ProductSaveLaterLink />
      <ProductAlternativesSection />
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
    ProductAlternativesSection
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
  }
}
</style>
