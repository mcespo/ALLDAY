<template>
  <section>
    <ul class="full-price">
      <li class="details">Pay Now</li>
      <li class="price">$1,250</li>
      <li class="details strike">$1,450</li>
      <li class="fineprint">$200 OFF with code</li>
    </ul>
    <hr />
    <ul class="installments">
      <li class="details">Pay as low as</li>
      <li class="price">$25<sub>/month</sub></li>
      <li class="details">with Klarna</li>
      <li class="fineprint"><a href="#">Learn More</a></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProductPriceSection"
};
</script>

<style scoped lang="scss">
section {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  hr {
    border-left: 1px solid var(--white-100);
    border-right: 1px solid var(--white-100);
    height: inherit;
  }
  ul {
    padding: 10px 0;
    list-style: none;
    text-align: center;
    .details {
      font-size: 20px;
      line-height: 1.65;
    }
    .price {
      font-size: 40px;
      color: var(--red-100);
      font-weight: bold;
      display: flex;
      align-items: baseline;
      sub {
        font-size: 0.5em;
      }
    }
    .fineprint {
      font-size: 12px;
      a {
        color: inherit;
      }
    }
    .strike {
      text-decoration: line-through;
    }
  }
}
</style>
