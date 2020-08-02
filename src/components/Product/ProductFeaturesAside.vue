<template>
  <aside>
    <FreeShipping />
    <ThreeSixtyFiveDayTrial />
    <MadeInAmerica />
    <TenYearWarranty />
    <SuperEasyAssembly />
    <HighQualityMaterials />
  </aside>
</template>

<script>
import FreeShipping from "../../assets/icons-text/FreeShipping.svg";
import ThreeSixtyFiveDayTrial from "../../assets/icons-text/ThreeSixtyFiveDayTrial.svg";
import MadeInAmerica from "../../assets/icons-text/MadeInAmerica.svg";
import TenYearWarranty from "../../assets/icons-text/TenYearWarranty.svg";
import SuperEasyAssembly from "../../assets/icons-text/SuperEasyAssembly.svg";
import HighQualityMaterials from "../../assets/icons-text/HighQualityMaterials.svg";

export default {
  name: "ProductFeaturesAside",
  components: {
    FreeShipping,
    ThreeSixtyFiveDayTrial,
    MadeInAmerica,
    TenYearWarranty,
    SuperEasyAssembly,
    HighQualityMaterials,
  }
};
</script>

<style scoped lang="scss">
aside {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
