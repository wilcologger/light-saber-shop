<template>
  <div class="text-center pt-5">
    <h1>shop</h1>
  </div>

  <CardOverview />
</template>

<script>
import CardOverview from "../components/CardOverview.vue";

export default {
  name: "ShopView",
  components: {
    CardOverview,
  },
};
</script>
