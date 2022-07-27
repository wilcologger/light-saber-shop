<template>
  <section class="row py-md-5">
    <div class="col-12 col-md-6 mx-auto">
      <form action="" class="">
        <label class="form-label">Wat is je leeftijd</label>
        <div class="input-group">
          <input class="form-control" type="number" v-model="ages" />
          <button class="btn btn-danger" @click="reset">Reset</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data() {
    return {
      ages: "", // lege string
    };
  },
  // setup() {
  //   // eslint-disable-next-line no-undef
  //   const ages = ref("");
  //   // eslint-disable-next-line no-unused-vars
  //   const reset = (evt) => {
  //     ages.value = ""; // clear the input
  //   };

  //   return {
  //     reset,
  //     // eslint-disable-next-line vue/no-dupe-keys
  //     ages,
  //   };
  // },
};
</script>
