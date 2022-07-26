<template>
  <div class="text-center pt-5">
    <h1>shop</h1>
  </div>
  <Search />
  <CardOverview />
</template>

<script>
import Search from "../components/Search.vue";
import CardOverview from "../components/CardOverview.vue";

export default {
  name: "ShopView",
  components: {
    CardOverview,
    Search,
  },
};
</script>
