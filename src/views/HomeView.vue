<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <CardOverview />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardOverview from "../components/CardOverview.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CardOverview,
  },
};
</script>
