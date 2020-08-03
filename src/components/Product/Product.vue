<template>
  <main>
    <div class="image-container">
      <ProductShippingAside />
      <ProductImageSection />
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
  grid-template-columns: 2fr 1fr;
  column-gap: 40px;
  width: 94vw;
  max-width: var(--max-width);
  justify-content: space-between;
  margin: 50px auto 96px;
  .image-container {
    @media only screen and (min-width: 1260px) {
      max-width: 872px;
    }
  }
  .details-container {
    @media only screen and (min-width: 1260px) {
      max-width: 586px;
    }
  }
}
</style>
