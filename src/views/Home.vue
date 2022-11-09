<template>
  <Hero/>
  <HowItWorks/>
  <WithCare/>
  <WhatFoodlyKnows/>
  <Application/>
  <FAQ/>
</template>
<script setup>
import Hero from "../components/pages/home/Hero.vue";
import HowItWorks from "../components/pages/home/HowItWorks.vue";
import WithCare from "../components/pages/home/WithCare.vue";
import WhatFoodlyKnows from "../components/pages/home/WhatFoodlyKnows.vue";
import Application from "../components/common/Application.vue";
import FAQ from "../components/common/FAQ.vue";
</script>
<script>
import router from "../router/index.js";

export default {
  mounted() {
    document.querySelector(".hero__search").addEventListener("submit", (e) => {
      e.preventDefault();
      router.push({ path: '/product', query: { q: document.querySelector("#query-field").value } })
    });
  },
}
</script>