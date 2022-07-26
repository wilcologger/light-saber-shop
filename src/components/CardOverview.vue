<template>
  <div class="row">
    <Card v-for="(card, index) in sabers" :sabers="card" :key="index" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import Card from "./Card.vue";

export default {
  name: "CardOverview",
  components: { Card },
  data() {
    return {
      sabers: sourceData.sabers,
    };
  },
};
</script>
