<template>
  <div class="col-12 col-md-4 mb-3">
    <div class="card h-100 mb-4">
      <img src="https://placedog.net/300/280" alt="dog" class="card-img-top" />
      <div class="card-body d-flex flex-column align-items-start">
        <div class="card-title h3">{{ sabers.name }}</div>
        <ul class="text-align-start">
          <li>Voorraad: {{ sabers.available }}</li>
          <li>Kristal naam: {{ sabers.crystal.name }}</li>
          <li>Kristal kleur: {{ sabers.crystal.color }}</li>
          <li>Kristal kracht: {{ sabers.crystal.force }}</li>
          <li>Kristal planeet: {{ sabers.crystal.planet }}</li>
          <li>Prijs: {{ sabers.price }}</li>
        </ul>
        <button class="btn btn-primary mt-auto" v-on:click="nextPage">
          Next page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    sabers: Object,
  },
  methods: {
    nextPage: function () {
      console.log("You have click me!");
    },
  },
};
</script>
